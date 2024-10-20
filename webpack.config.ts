import { Configuration } from "webpack";
import { resolve } from "path";

const config: Configuration = {
  mode: "production",
  entry: {
    bundle: "./index.ts",
  },
  target: "node",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dist"),
  },
};
export default config;
