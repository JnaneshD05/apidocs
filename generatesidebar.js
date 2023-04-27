// Imports
const fs = require('fs');
const path = require('path');
const baseDir = "./docs/api/cv" // specify the base directory path
var main = []; // Main array of all sidebars
const fileTag = 'tag.mdx'; // replace with your file name tag
const TAGS_FILE_PATH = "all_tags.yaml";
const yaml = require('js-yaml');
const tags_file_stream = fs.readFileSync(TAGS_FILE_PATH, "utf-8");
const tags_object = yaml.load(tags_file_stream, { schema: yaml.JSON_SCHEMA });
const sidebar_object_new = {
  "OnPrem": []
};
const new_paths_added = [];
const sidebars_with_xpath = [];
const all_tags = [];
const sidebars_with_xpath_data = {};
const sidebars_with_xmerge = {};
fs.readdir("./docs/api/cv/", (err, files) => { // read the contents of the directory
  if (err) {
    console.log(`Error reading directory ${baseDir}: ${err}`);
  }
  else {
    files.forEach(file => { // iterate over the contents of the directory
      const filePath = baseDir + "/" + file + "/sidebar.js";
      const obj = require(filePath);
      main.push(...obj.slice(1));

    });
    aftermainloaded(main);
    deleteFiles(baseDir);
  }
}
);



function deleteFiles(filePath) {
  try {
    if (fs.statSync(filePath).isDirectory()) {
      // if filePath is a directory, recursively call deleteFiles on its contents
      fs.readdirSync(filePath).forEach((file) => {
        const fileFullPath = path.join(filePath, file);
        deleteFiles(fileFullPath);
      });
    } else if (filePath.endsWith(fileTag)) {
      // if filePath is a file that ends with fileTag, delete it
      fs.unlinkSync(filePath);
      console.log(`File ${filePath} deleted`);
    }
  } catch (err) {
    console.error(err);
  }
}

// Run this function after all files are read 
function aftermainloaded(sidebar_object) {
  for (const i of tags_object["tags"]) {
    const name = i["name"];
    for (const key in i) {
      if (key === "x-path") {
        sidebars_with_xpath.push(name);
        sidebars_with_xpath_data[name] = i[key];
      }
      if (key === "x-merge") {
        sidebars_with_xmerge[name] = i[key];
      }
    }
  }
  function return_new_tag(name) {
    const tag = {
      "type": "category",
      "label": `${name}`,
      "items": []
    };
    return tag;
  }
  function return_tagjson_recurs(taglist) {
    if (taglist.length === 1) {
      return return_new_tag(taglist[0]);
    }
    else {
      return {
        "type": "category",
        "label": `${taglist[0]}`,
        "items": [return_tagjson_recurs(taglist.slice(1))]
      };
    }
  }
  function add_to_newjson(taglistm, json_input) {
    let jsobj = { ...json_input };
    if (jsobj.link) {
      delete jsobj.link;
    }
    if (taglistm.length >= 1) {
      for (let i of sidebar_object_new.OnPrem) {
        for (let [key, value] of Object.entries(i)) {
          if (key === "type" && value === "category" && i.label === taglistm[0]) {
            if (taglistm.length === 2) {
              for (let j of i.items) {
                if (j.type === "category" && j.label === taglistm[1]) {
                  j.items.unshift(jsobj);
                }
              }
            } else if (taglistm.length === 1) {
              i.items.unshift(jsobj);
            } else if (taglistm.length === 3) {
              for (let j of i.items) {
                if (j.type === "category" && j.label === taglistm[1]) {
                  for (let k of j.items) {
                    if (k.type === "category" && k.label === taglistm[2]) {
                      k.items.unshift(jsobj);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Resolve the duplicates in the sidebars and push all the tags to the new array which 
  // are does not have to be merged or rearranged
  for (let i = 0; i < sidebar_object.length; i++) {
    for (let [key, value] of Object.entries(sidebar_object[i])) {
      if (key === "type" && value === "category") {
        let remove_tag_link = { ...sidebar_object[i] };
        if (remove_tag_link.hasOwnProperty("link")) {
          delete remove_tag_link.link;
        }
        if (all_tags.includes(sidebar_object[i].label)) {
          for (let obj of sidebar_object_new["OnPrem"]) {
            if (obj.label === sidebar_object[i].label) {
              obj.items.push(...sidebar_object[i].items);
            }
          }
        } else {
          all_tags.push(sidebar_object[i].label);
          let label = sidebar_object[i].label;
          if (!sidebars_with_xpath.includes(label) && !Object.keys(sidebars_with_xmerge).includes(label)) {
            sidebar_object_new["OnPrem"].push(remove_tag_link);
          }
        }
      }
    }
  }

  // Merge logic
  for (let i of sidebar_object) {
    for (let [key, value] of Object.entries(i)) {
      if (key === "type" && value === "category") {
        let label = i["label"];
        if (sidebars_with_xpath.includes(label)) {
          let actual_path = sidebars_with_xpath_data[label];
          let actual_path_list = actual_path.split(".");
          let total_hierarchy_length = actual_path_list.length;
          let i_variable_copy = Object.assign({}, i);
          if (i_variable_copy["link"]) {
            delete i_variable_copy["link"];
          }
          let array_str = `nsidebar_obj["items"]${'[0]["items"]'.repeat(total_hierarchy_length - 1)}.push(i_variable_copy)`;
          if (!new_paths_added.includes(actual_path_list[0]) && !all_tags.includes(actual_path_list[0])) {
            for (let newpath of actual_path_list) {
              new_paths_added.push(newpath);
            }
            let nsidebar_obj = return_tagjson_recurs(actual_path_list);
            eval(array_str);
            sidebar_object_new["OnPrem"].push(nsidebar_obj);
          }
          else {
            if (actual_path_list.length == 2 && !new_paths_added.includes(actual_path_list[1]) && !all_tags.includes(actual_path_list[1])) {
              new_paths_added.push(actual_path_list[1]);
              let nsidebar_obj = return_tagjson_recurs(actual_path_list.slice(1));
              for (let m of sidebar_object_new["OnPrem"]) {
                for (let [mmkey, mmval] of Object.entries(m)) {
                  if (mmkey == "type" && mmval == "category" && m["label"] == actual_path_list[0]) {
                    m["items"].splice(0, 0, nsidebar_obj);
                    add_to_newjson(actual_path_list, i);
                    break;
                  }
                }
              }
            }
            else if (actual_path_list.length === 3) {
              if (!new_paths_added.includes(actual_path_list[1]) && !all_tags.includes(actual_path_list[1])) {
                new_paths_added.push(actual_path_list[1]);
                let nsidebar_obj = return_tagjson_recurs(actual_path_list.slice(1));
                for (let m of sidebar_object_new["OnPrem"]) {
                  for (let [mmkey, mmval] of Object.entries(m)) {
                    if (mmkey === "type" && mmval === "category" && m["label"] === actual_path_list[0]) {
                      m["items"].splice(0, 0, nsidebar_obj);
                      add_to_newjson(actual_path_list, i);
                      break;
                    }
                  }
                }
              } else if (!new_paths_added.includes(actual_path_list[2]) && !all_tags.includes(actual_path_list[2])) {
                new_paths_added.push(actual_path_list[2]);
                let nsidebar_obj = return_tagjson_recurs(actual_path_list.slice(2));
                for (let m of sidebar_object_new["OnPrem"]) {
                  for (let [mmkey, mmval] of Object.entries(m)) {
                    if (mmkey === "type" && mmval === "category" && m["label"] === actual_path_list[0]) {
                      for (let n of m["items"]) {
                        for (let [nnkey, nnval] of Object.entries(n)) {
                          if (nnkey === "type" && nnval === "category" && n["label"] === actual_path_list[1]) {
                            n["items"].splice(0, 0, nsidebar_obj);
                            add_to_newjson(actual_path_list, i);
                            break;
                          }
                        }
                      }
                      break;
                    }
                  }
                }
              }

            }
            else {
              add_to_newjson(actual_path_list, i);
            }

          }
        }

      }
    }
  }
  // Merge tags based on x-merge in yaml
  for (let i = 0; i < sidebar_object.length; i++) {
    for (const [key, value] of Object.entries(sidebar_object[i])) {
      if (key === "type" && value === "category") {
        let label = sidebar_object[i]["label"];
        if (label in sidebars_with_xmerge) {
          let actual_path = sidebars_with_xmerge[label].split(".");
          for (let j = 0; j < sidebar_object_new["OnPrem"].length; j++) {
            let dobj = sidebar_object_new["OnPrem"][j];
            if (dobj["label"] === actual_path[0]) {
              if (actual_path.length === 1) {
                dobj["items"].splice(0, 0, ...sidebar_object[i]["items"]);
                break;
              }
              for (let k = 0; k < dobj["items"].length; k++) {
                let eobj = dobj["items"][k];
                if (eobj["label"] === actual_path[1]) {
                  if (actual_path.length === 2) {
                    eobj["items"].splice(0, 0, ...sidebar_object[i]["items"]);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const ssbar = sidebar_object_new["OnPrem"].sort((a, b) => a.label.localeCompare(b.label));
  ssbar.unshift({
    "type": "doc",
    "id": "api/cv/ActivateOperations/commvault-rest-api-public"
  });
  const jsondata = JSON.stringify(ssbar, null, 2);
  fs.writeFile("sidebar_merged.json", jsondata, (err) => {
    if (err) throw err;
    console.log("Data written to the file");
  });
}