//Se instalaron las siguientes dependencias: @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server

//Viene en node y sirve para poder saber las direcciones de donde nos encontramos
const path = require("path");
//Sirve para trabajar con webpack
const HtmlWebPackPlugin = require("html-webpack-plugin");
//Plugin para los estilos
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //Esta es la dirección de entrada de nuestro proyecto
  entry: "./src/index.js",
  //Aqui configuramos la salida, desde la carpeta hasta el nombre del archivo
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/styles/style.css",
          to: "",
        },
      ],
    }),
  ],
};
