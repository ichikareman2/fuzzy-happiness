module.exports = {
  "stories": [
    "../projects/fuzzy-happiness-lib/src/lib/stories/**/*.stories.mdx",
    "../projects/fuzzy-happiness-lib/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}
