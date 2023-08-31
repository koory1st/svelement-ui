# 20230831

Configurate markdown file, reference:

https://github.com/rodneylab/sveltekit-blog-mdx/blob/main/svelte.config.js

# 20230810

在 button 里添加了编译 css 的功能，但是在 docs 里 import 这个 css 的时候提示错误：`Missing "./dist/style/style.css" specifier in "@svelement-ui/button" package`
通过 package 里添加了 exports 解决了。

docs 引入 button 之后报错，找不到 button 里用的包`@svelement-ui/util-array-2-class-string`，因为 button 根本没有被编译过，还是以 svelte 文件存在。
npm 应该可以设置 bundledDependencies，这样可以在安装 button 的时候，同时把`@svelement-ui/util-array-2-class-string`也安装上。
不过目前使用的 pnpm，实测不支持 bundledDependencies。
没办法，那么 docs 里也要同时安装 button 里依赖的包。

修改之后，提示 `The package may have incorrect main/module/exports specified in its package.json`
因为 util 包没有配置对，修改 package 文件的 main 部分。

# 20230808

决定把 util 设定成 package，先用 errors 创建 package，

```bash
pnpm create vite
```

发现 build 的时候不会生成 ts 的定义文件，上网找到这个解决
https://juejin.cn/post/7153139817495134238

# 20230803

1. 使用 lerna 初始化项目
2. 添加 docs：sveltekit
