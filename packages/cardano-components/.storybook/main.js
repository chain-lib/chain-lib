module.exports = {
  "stories": ["../src/**/*.stories.{js,md,mdx,ts}"],

  "core": {
    "builder": "webpack5",
  },
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "webpackFinal": async (config, { configType }) => {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
    };
    return config;
  },
  
};
