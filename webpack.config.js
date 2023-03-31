const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (env, {mode}) => {
  const isProduction = mode === 'production'

  const envPublicPath = isProduction
    ? 'http://localhost:8080/'
    : 'http://localhost:3000/'

   const remoteBaseUrl = isProduction
    ? 'http://localhost:8081'
    : 'http://localhost:3001'

  const remoteBaseUrlVueApp = 'http://localhost:3002'

  return {
    output: {
      publicPath: envPublicPath,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3000,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "app_mf_poc_host_app",
        filename: "remoteEntry.js",
        remotes: {
          details: `app_mf_poc_details_app@${remoteBaseUrl}/remoteEntry.js`,
          vueApp: `app_mf_poc_vue_app@${remoteBaseUrlVueApp}/remoteEntry.js`
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
