# koa2
#### 什么是koa框架？
koa是一个基于node实现的一个新的web框架，它是由express框架的原班人马打造的。它的特点是优雅、简洁、表达力强、自由度高。它更express相比，它是一个更轻量的node框架，因为它所有功能都通过插件实现。
#### 关于项目
 此项目只是一个入门级的Demo，重在体现一个正常后台代码结构和基本功能。所以选择通过Koa2来实现MVC架构，主要包含Controller控制层和Service业务层。简单的说Controller 层主要对用户的请求参数进行处理（校验、转换），然后调用对应的 service 方法处理业务，得到业务结果后封装并返回。Service层就是在复杂业务场景下用于做业务逻辑封装的一个抽象层。
这个项目虽然功能比较单一，但是还是决定按MVC的规范来比较好。

#### 文件结构

```
├── Koa2
│   ├── config
│   │   ├── DBconfig.js// 数据库配置文件
|   ├── controller
|   |   ├──userController.js
|   ├── lib
|   |   ├──mysql.js //连接Mysql
|   ├── router
|   |   ├──index.js // 总路由
|   ├── service
|   |   ├──user.js 
|   ├── index.js //入口文件
└── ── package.json
```
文件结构尽量模仿了MVC架构开发。核心代码就是Koa2目录下的五个文件

- index.js 是整个koa2 的入口文件，注册了router和各种中间件。
- config是数据库的配置文件，里面DBconfig.js来统一管理数据库的配置。
- controller 文件夹MVC架构下的controller层router 文件夹来处理不同的路径请求，导入到对应的controller
- service 文件夹是MVC的业务层，处理来自controller的数据，查询后数据库处理后返回处理后的数据
- package.json 配置文件

#### 数据库配置


```
//Koa2/config/DBcongfig.js
/*数据库默认配置*/
const database ={
    database: 'escappe', //数据库名称
    user: 'root', //mysql用户名
    password: '123456', //mysql密码
    PORT: '3306', //mysql端口号
    host: "127.0.0.1" //服务器ip
}
module.exports = database

```
