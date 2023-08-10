# 20230810
在button里添加了编译css的功能，但是在docs里import这个css的时候提示错误：`Missing "./dist/style/style.css" specifier in "@svelement-ui/button" package`
通过package里添加了exports解决了。


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