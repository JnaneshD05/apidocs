const fs = require("fs");
const BUSINESS_COMPONENTS = "business-components";
const DOCS_PATH = "./docs";
const TEER_CHANGE_LOG = "teer-change-log";
const TEER_PACKAGES = ["ui", "utils", "charts", "icons"];
const TEER_CHANGE_LOG_NAV_ITEMS = (fs.existsSync(`${DOCS_PATH}/${TEER_CHANGE_LOG}/ui.md`)) ? TEER_PACKAGES.map(p => `${TEER_CHANGE_LOG}/${p}`) : undefined;

module.exports = {
    APP_TITLE: "REST API Docs",
    BUSINESS_COMPONENTS_WORKDIR: `./${BUSINESS_COMPONENTS}`,
    TARGET_FOR_READMES_IN_DOCS_DIR: `${DOCS_PATH}/business-components`,
    README_PATH_PREFIX: BUSINESS_COMPONENTS,
    TEER_CHANGE_LOG_DOC_PATH: `${DOCS_PATH}/${TEER_CHANGE_LOG}`,
    TEER_CHANGE_LOG_PATH: TEER_CHANGE_LOG,
    TEER_PACKAGES,
    TEER_CHANGE_LOG_NAV: TEER_CHANGE_LOG_NAV_ITEMS ? ({
        type: "category",
        label: "Teer",
        items: TEER_CHANGE_LOG_NAV_ITEMS
    }) : undefined
}