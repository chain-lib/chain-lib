module.exports = {
  "stories": ['../packages/cardano-components/**/*.stories.{js,md,mdx,ts}'],
  "features": {
    storyStoreV7: true,
    buildStoriesJson: true,
    modernInlineRender: true,
  },
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/web-components",
  webpackFinal: async (config) => {
    // find web-components rule for extra transpilation
    const webComponentsRule = config.module.rules.find(
      (rule) => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // add your own `my-library`
    webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)@chain-lib/cardano-api(.*)\\.js$`));
    webComponentsRule.test.push(new RegExp('packages/*/src/*.ts'))

    return config;
  },
};
