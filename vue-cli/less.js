const { resolve } = require("./utils");
module.exports = {
  modifyVars: {
    /**
     * webpack 在运行的时候会利用 less-loader 创建当前的变量树
     * 即从第一个 less 入口开始 如果 main.js 引入了 less 文件会根据引入顺序
     * 导入 less 文件 因此在这个树中  变量会作用至全局
     * 即在任何 less 中都可以使用这些变量
     * hack 是 less 的一个转译符号
     *
     * 最终编译为:
     * [main.js]入口之中的 less 内容
     * @hack:true;
     * @import "xxxxxx";
     * [...]之后读取到的 less 内容
     *
     *从未达到覆盖 vant 变量 和把 变量作用与全局
     */
    hack: `true;@import "${resolve("./src/styles/vant-var.less")}"`
  }
};
