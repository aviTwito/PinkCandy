module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },

  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint",

    sourceType: "module"
  },
  plugins: ["vue"],
  // "extends": ['plugin:vue/essential',
  //     'plugin:prettier/recommended', // we added this line
  //     '@vue/prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": ["error", "never"],
    "linebreak-style": "off"
  }
};
