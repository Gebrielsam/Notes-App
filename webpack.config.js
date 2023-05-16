module.exports = {
  output: {
    filename: "[name].pack.js",
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["@babel/plugin-proposal-class-properties"]],
          },
        },
        exclude: /node_modules/,
        test: /\.js$/,
      },
    ],
  },
  entry: {
    index: "./index",
  },
};