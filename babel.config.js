module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        //SOURCE: https://github.com/tleunen/babel-plugin-module-resolver
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            shared: "./src/shared",
            helpers: "./src/helpers",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
