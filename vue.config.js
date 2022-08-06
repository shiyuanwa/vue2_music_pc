// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
// });

const resolve = (dir) => require("path").join(__dirname, dir);
/* 环境信息 */
const isDevelopment = `${process.env.NODE_ENV}`.includes("development");

module.exports = {
  chainWebpack: (config) => {
    /* 别名 */
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("@store", resolve("./src/store"))
      .set("@utils", resolve("./src/utils"))
      .set("@views", resolve("./src/views"))
      .set("@assets", resolve("./src/assets"))
      .set("@router", resolve("./src/router"))
      .set("@components", resolve("./src/components"));
  },
};
