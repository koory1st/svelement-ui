# 20230810
在button里添加了编译css的功能，但是在docs里import这个css的时候提示错误：`Missing "./dist/style/style.css" specifier in "@svelement-ui/button" package`
通过package里添加了exports解决了。

docs引入button之后报错，找不到button里用的包`@svelement-ui/util-array-2-class-string`，因为button根本没有被编译过，还是以svelte文件存在。
npm应该可以设置bundledDependencies，这样可以在安装button的时候，同时把`@svelement-ui/util-array-2-class-string`也安装上。
不过目前使用的pnpm，实测不支持bundledDependencies。
没办法，那么docs里也要同时安装button里依赖的包。

修改之后，提示 `The package may have incorrect main/module/exports specified in its package.json`
因为util包没有配置对，修改package文件的main部分。

# 20230808
决定把util设定成package，先用errors创建package，
```bash
pnpm create vite
```
发现build的时候不会生成ts的定义文件，上网找到这个解决
https://juejin.cn/post/7153139817495134238


# 20230803
1. 使用lerna初始化项目
2. 添加docs：sveltekit