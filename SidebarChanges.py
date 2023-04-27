SIDEBAR_FILE_PATH = "sidebar_merged.json"
TAGS_FILE_PATH = "all_tags.yaml"
import json
import yaml

sidebar_file_stream = open(SIDEBAR_FILE_PATH, "r", encoding="utf-8")
tags_file_stream = open(TAGS_FILE_PATH, "r", encoding="utf-8")

sidebar_object = json.load(sidebar_file_stream)
tags_object = yaml.load(tags_file_stream, Loader=yaml.Loader)

sidebar_object_new = {
    "OnPrem": []
}
new_paths_added = []
sidebars_with_xpath = []
all_tags = []
sidebars_with_xpath_data = {}
sidebars_with_xmerge = {}

for i in tags_object["tags"]:
    name = i["name"]
    for key in i:
        if key == "x-path":
            sidebars_with_xpath.append(name)
            sidebars_with_xpath_data[name] = i[key]
        if key == "x-merge":
            sidebars_with_xmerge[name] = i[key]

def return_new_tag(name):
    tag = {
        "type": "category",
        "label": f"{name}",
        "items": []
    }
    return tag


def return_tagjson_recurs(taglist):
    if(len(taglist) == 1):
        return return_new_tag(taglist[0])
    else:
        return {
        "type": "category",
        "label": f"{taglist[0]}",
        "items": [return_tagjson_recurs(taglist[1:])]
        }

def add_to_newjson(taglistm, json_input):
    jsobj = json_input.copy()
    if jsobj.get("link"):
        del jsobj["link"]
    if(len(taglistm) >= 1):
        for i in sidebar_object_new["OnPrem"]:
            for key, value in i.items():
                if key == "type" and value == "category" and i["label"] == taglistm[0]:
                    if len(taglistm) == 2:
                        for j in i["items"]:
                            if key == "type" and value == "category" and j["label"] == taglistm[1]:
                                j["items"].insert(0, jsobj)
                    elif len(taglistm) == 1:
                        i["items"].insert(0, jsobj)
                    elif len(taglistm) == 3:
                        for j in i["items"]:
                            if key == "type" and value == "category" and j["label"] == taglistm[1]:
                                for k in j["items"]:
                                    if key == "type" and value == "category" and k["label"] == taglistm[2]:
                                        k["items"].insert(0, jsobj)

# Now lets start processing the actual sidebar js file.
# Go through the list of all categories in sidebar .
# If we find something which should have been inside the subtag, either we need to create it
# or we need to place it inside the tag which is present
# check if the xpath splitted with dot and its first tag is present in the all_tags. Second level tags will not be
# present for sure so we need to create them at the run time.
# if it is present.
# If the level is more than 1 then its mostly that no such tags are already in the tag list.
for i in sidebar_object:
    for key, value in i.items():
        if key == "type" and value == "category":
            # Check for duplicate tags
            remove_tag_link = i.copy()
            if remove_tag_link.get("link"):
                del remove_tag_link["link"]
            if i.get("label") in all_tags:
                for obj in sidebar_object_new["OnPrem"]:
                    if obj.get("label") == i.get("label"):
                        obj.get("items").extend(i.get("items"))
            else:
                all_tags.append(i.get("label"))
                label = i.get("label")
                # If this tag has to be moved

                if label not in sidebars_with_xpath and label not in sidebars_with_xmerge.keys():
                    sidebar_object_new["OnPrem"].append(remove_tag_link)

for i in sidebar_object:
    for key, value in i.items():
        if key == "type" and value == "category":
            label = i.get("label")
            # If this tag has to be moved
            if label in sidebars_with_xpath:
                # get the actual path
                actual_path = sidebars_with_xpath_data[label]
                actual_path_list = actual_path.split(".")
                total_hierarchy_length = len(actual_path_list)
                i_variable_copy = i.copy()
                if i_variable_copy.get("link"):
                    del i_variable_copy["link"]
                array_str = 'nsidebar_obj["items"]' + '[0]["items"]' * (total_hierarchy_length - 1) + '.append(i_variable_copy)'
                if actual_path_list[0] not in new_paths_added and actual_path_list[0] not in all_tags:
                    for newpath in actual_path_list:
                        new_paths_added.append(newpath)
                    #new_paths_added.append(actual_path_list[0])
                    nsidebar_obj = return_tagjson_recurs(actual_path_list)
                    eval(array_str)
                    sidebar_object_new["OnPrem"].append(nsidebar_obj)
                else:
                    if len(actual_path_list) == 2 and actual_path_list[1] not in new_paths_added and actual_path_list[1] not in all_tags:
                        new_paths_added.append(actual_path_list[1])
                        nsidebar_obj = return_tagjson_recurs(actual_path_list[1:])
                        for m in sidebar_object_new["OnPrem"]:
                            for mmkey, mmval in m.items():
                                if mmkey == "type" and mmval == "category" and m["label"] == actual_path_list[0]:
                                    m["items"].insert(0, nsidebar_obj)
                                    add_to_newjson(actual_path_list, i)
                                    break
                    elif len(actual_path_list) == 3:
                        if actual_path_list[1] not in new_paths_added and actual_path_list[1] not in all_tags:
                            new_paths_added.append(actual_path_list[1])
                            nsidebar_obj = return_tagjson_recurs(actual_path_list[1:])
                            for m in sidebar_object_new["OnPrem"]:
                                for mmkey, mmval in m.items():
                                    if mmkey == "type" and mmval == "category" and m["label"] == actual_path_list[0]:
                                        m["items"].insert(0, nsidebar_obj)
                                        add_to_newjson(actual_path_list, i)
                                        break
                        elif actual_path_list[2] not in new_paths_added and actual_path_list[2] not in all_tags:
                            new_paths_added.append(actual_path_list[2])
                            nsidebar_obj = return_tagjson_recurs(actual_path_list[2:])
                            for m in sidebar_object_new["OnPrem"]:
                                for mmkey, mmval in m.items():
                                    if mmkey == "type" and mmval == "category" and m["label"] == actual_path_list[0]:
                                        for n in m["items"]:
                                            for nnkey, nnval in n.items():
                                                if nnkey == "type" and nnval == "category" and n["label"] == actual_path_list[1]:
                                                    n["items"].insert(0, nsidebar_obj)
                                                    add_to_newjson(actual_path_list, i)
                                                    break
                    else:
                        add_to_newjson(actual_path_list, i)

# X MERGE CODE
for i in sidebar_object:
    for key, value in i.items():
        if key == "type" and value == "category":
            label = i.get("label")
            if label in sidebars_with_xmerge.keys():
                actual_path = sidebars_with_xmerge[label].split(".")
                for dobj in sidebar_object_new["OnPrem"]:
                    if dobj["label"] == actual_path[0]:
                        if len(actual_path) == 1:
                            # dobj["items"].extend(i["items"])
                            dobj["items"][:0] = i["items"]
                            break
                        for eobj in dobj["items"]:
                            if eobj["label"] == actual_path[1]:
                                if len(actual_path) == 2:
                                    # eobj["items"].extend(i["items"])
                                    eobj["items"][:0] = i["items"]
                                    break

ssbar = sorted(sidebar_object_new["OnPrem"], key = lambda x : x["label"]) #sidebar_object_new
ssbar.insert(0, {
    "type": "doc",
    "id": "api/cv/Activate/commvault-rest-api-public"
  })
sidebar_file_stream.close()
newsidebar = open("sidebar_merged.json","w")
json.dump(ssbar, newsidebar)
