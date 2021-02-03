module.exports = {
    /* File Manager */
    Manager: require("./classes/manager"),

    /* Secure Files */
    CreateSecureFile: require("./lib/createsecure"),
    DeleteSecureFile: require("./lib/deletesecure"),
    GetSecureFile: require("./lib/getsecure"),
    SetSecureFile: require("./lib/setsecure"),

    /* Temp Files */
    CreateTempFile: require("./lib/createtemp"),
    DeleteTempFile: require("./lib/deletetemp"),
    GetTempData: require("./lib/temp/gettemp"),
    SetTempData: require("./lib/temp/settemp"),

    /* Regular Files */
    CreateFile: require("./lib/create"),
    DeleteFile: require("./lib/delete"),
    GetData: require("./lib/get"),
    SetData: require("./lib/set"),
}