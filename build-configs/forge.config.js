module.exports = {
    make_targets: {
        win32: ["squirrel"],
        darwin: ["zip"],
        linux: ["deb","rpm"]
    },
    electronPackagerConfig: {
        asar: false,
        ignore: [".idea", "\/build-configs", ".iml", ".eslintrc", ".gitignore", "readme.md"]
    },
    electronWinstallerConfig: {
        name: "radiant-js",
        loadingGif: ""
    },
    electronInstallerDebian: {},
    electronInstallerRedhat: {},
    github_repository: {
        owner: "apolaskey",
        name: "radiant-js"
    },
    windowsStoreConfig: {
        packageName: "radiant-js",
        name: "Radiant Engine"
    }
};