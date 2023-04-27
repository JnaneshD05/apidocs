const fs = require('fs');
const path = require('path');

baseDir = path.join(__dirname, "./api/Individual Yamls")
const apiConfig = {}

const files = fs.readdirSync(baseDir);
files.forEach((file) => {
    out_dir = file == "Metallic.yaml"? "cv2" : "cv";
    folder_name = file.replace(".yaml","").replace(/\s+/g, '');
    apiConfig[folder_name] = {
        specPath: `api/Individual Yamls/${file}`,
        outputDir: `docs/api/${out_dir}/${folder_name}`,
        sidebarOptions: {
            groupPathsBy: "tag", categoryLinkSource: "tag"
        }
    }
});
module.exports = apiConfig;