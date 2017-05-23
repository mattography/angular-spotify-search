module.exports = {
    entry: ["./js/export.js","./js/entry.js","./js/mixpanel_tracking.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
