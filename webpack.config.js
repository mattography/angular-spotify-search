module.exports = {
    entry: ["./js/entry.js","./js/export.js","./js/mixpanel_tracking.js"],
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
