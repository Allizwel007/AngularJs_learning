## 富运通移动端

> 1. javascript 技术栈vuejs + vue-router
> 2. UI采用是的mint.JS
> 3. 预处理器less

## 目录结构

```
+ -- dist           前端文件输出文件夹
+ -- config         webpack 及环境相关配置
+ -- mock           系统mock数据
+ -- scripts        npm 对应的相关命令
+ -- src            源代码
  + -- assets       资源库
  + -- css          样式文件（scss）
  + -- js           业务逻辑
  + -- index.ejs    入口页面模板

```

## 工程配置

#### 安装淘宝镜像
```bash
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

#### 工程依赖

``` bash
# install dependencies
cnpm install

# serve with hot reload at http://localhost:8089
npm run dev 或者 npm start

# serve with hot reload use mock data at http://localhost:8089
npm run mock

# check the javascript coding unify and illegal
npm run eslint

```

## 本地调试

### 配置host
``` bash
127.0.0.1           rf.express.local.com
```

### 配置ngniux
``` code
server {
        listen       80;
        server_name  rf.express.local.com;
        access_log  logs/rf.access.log  main;

		location / {
      proxy_pass   http://127.0.0.1:8089;
        index  index.html index.htm;
      }
  
      location /rf_express {
        proxy_pass http://10.60.65.181:8080/rf_express;
      }
  
      location /kdn {
        proxy_pass http://yd.test.rfgmc.com/kdn;
      }
      
      location /rfucenter {
        proxy_pass http://10.60.65.181:6080/rfucenter;
      }

      error_page   500 502 503 504  /50x.html;
      location = /50x.html {
          root   html;
      }
    }
```

