const fs = require("fs");
const onprem = require("./sidebar_merged.json");

if(fs.existsSync("./sidebar_metallic_latest.js")) {
  const Metallic = require("./sidebar_metallic_latest.js")
  module.exports = {
    OnPrem: onprem,
    Metallic: Metallic
  };
}
else{
  module.exports = {
    OnPrem: onprem
  };
}

