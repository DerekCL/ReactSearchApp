const path = require("path");

// TODO: When we move to newer Node, use "tsconfig-paths-webpack-plugin" and
// erase `resolve.alias`.

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 5000,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        filename: "index.js",
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                test: /\.(j|t)sx?$/,
            },
        ],
    },
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "src"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
};
