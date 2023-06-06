module.exports = {
  // 运行环境
  env: {
    browser: true,
    es2021: true,
  },
  // 规则继承
  extends: [
    // 开启推荐规则
    'eslint:recommended',
    // ts 语法规则
    'plugin:@typescript-eslint/recommended',
    // vue3 语法规则
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {},
};
