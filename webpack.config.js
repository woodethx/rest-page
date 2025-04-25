const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 8080,          // so you can still visit http://localhost:8080
    hot: true,           // Hot Module Replacement for JS & injected CSS
    liveReload: true,    // fallback full-page reload if HMR can’t apply
    watchFiles: ['src/**/*.html', 'src/**/*.css'] // watch raw templates
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff2?|ttf|eot|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][hash][ext]"
        }
      }
    ],
  },
};