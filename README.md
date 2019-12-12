# Side project

This is a project developed by the author 54sword, and his github link is https://github.com/54sword. I deployed this project using nginx, digitalocean and MongoDB, and the domain name of the deployed website on my server is ddfantasies.com. Most features of xiaoduyu.com can be used on my server. 


## Here are the links of the original project 小度鱼开源项目
|项目|项目体验|原代码|主要技术栈|
|:---:|:---:|:---:|:---:|
|WEB网站|[www.xiaoduyu.com](https://www.xiaoduyu.com)|[github.com/54sword/xiaoduyu.com](https://github.com/54sword/xiaoduyu.com)|React、Redux、React-Router、GraphQL|
|APP（iOS、Android）|![小度鱼](https://qncdn.xiaoduyu.com/qrcode.png "小度鱼")|[github.com/54sword/xiaoduyuReactNative](https://github.com/54sword/xiaoduyuReactNative)|React-Native、Redux、React-Navigation、GraphQL|
|后端API|[www.xiaoduyu.com/graphql](https://www.xiaoduyu.com/graphql)|[github.com/54sword/api.xiaoduyu.com](https://github.com/54sword/api.xiaoduyu.com)|TypeScript、NodeJS、Express、MongoDB、GraphQL|
|后台管理|[admin.xiaoduyu.com](http://admin.xiaoduyu.com)|[github.com/54sword/admin.xiaoduyu.com](https://github.com/54sword/admin.xiaoduyu.com)|React、Redux、React-Router、GraphQL|

## 开发环境部署

```
1. 安装 Node.js  
2. git clone git@github.com:54sword/xiaoduyu.com.git  
3. cd xiaoduyu.com  
4. npm install  
5. cp config/index.default.js config/index.js  
6. npm run dev  
7. 访问 http://localhost:4000  
8. 完成
```

## 线上部署
1、安装 Node.js  
2、打包项目

```
npm run dist 
```
  
3、将 dist、package.json、package-lock.json 上传到服务器，然后在服务器进入到项目目录，执行如下命令，安装依赖包

```
npm install
```
4、启动服务  

```
node ./dist/server/server.js
```

## 开源协议
MIT
