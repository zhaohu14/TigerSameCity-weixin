# uni-app-vue3-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 出现Syntax Error: TypeError: loaderContext.getOptions is not a function
```
降低 cli-plugin-typescript版本

npm i -D @vue/cli-plugin-typescript@4.5.15 
```