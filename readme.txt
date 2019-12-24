参考： https://www.jianshu.com/p/513c5eab17c1

1、dva 安装
    npm install -g dva-cli

2、创建项目
    dva new dva-demo

3、项目结构

    components：
        最基础的组件。这里面存放的只是最基本的UI组件，这些组件接收外部传过来的参数（数据），并将这些数据渲染的到界面。根据传入的参数的不同，界面渲染也不同。

    container：
        contatiner负责将数据的组件进行连接，相当于将compontent组件和store里面的数据进行包装，生成一个新的有数据的组件。然后，在router.js配置文件中引用container中的组件。
        routers：router目录其实和container目录基本一样，只是在利用dva开发的应用中叫router，在不是利用dva开发的应用中叫container而已，两者有一个即可。

    models：
        model是dva中的一个重要概念，也可以看作是前端中的数据层。在我的理解里，dva将model以
        namespace 作为唯一标识进行区分，然后将所有model的数据存储到redux 中的store里面。在引用的时候，通过各个model的namespace进行引用。Model，是一个处理数据的地方，在model里面调用service层获取数据。

    services：
        services负责向后台请求数据，在services里调用后台提供的api获取数据。

    utils：
        工具类目录，比如常见的后台接口请求工具类。

    assets：
        存放css或less样式文件。

    constants.js：
        在里面定义一些通用的常量。

    router.js：
        配置整个应用的路由。

    index.js：
        整个应用的入口文件，dva和其它框架稍有不同。


    ├── /dist/                                         // 打包目标目录
    ├── /src/                                          // 项目源码目录
    │ ├── /components/                                 // 通用组件目录
    │ ├── /models/                                     // 数据模型
    │ 				└── example.js                     // model example, dva的模型是一个集合了redux中 reducer 和 store，异步action等的抽象概念。
    │ ├── /services/                                   // 存放 服务相关组件或函数
    │ ├── /mock/                                       // 模拟数据mock
    │ ├── /routes/                                     // 与路由对应的页面
    │ 				└── page.js                        // 与路由规则匹配的页面组件
    │ ├── index.css                                    // 项目入口css
    │ ├── index.js                                     // 项目入口，手动配置开发时候开发的模块
    │ └── router.js                                    // 项目路由 （默认使用React-Router中的HashRouter，所以你会看到URL最后有一个#号，可以通过使用dva-no-router禁用react-router）
    ├── package.json                                   // 项目依赖信息
    ├── .eslintrc                                      //  Eslint配置
    ├── .gitignore                                     //  git 忽略文件以及目录
    └── .webpackrc                                     //  roadhog配置
    └── README.md                                      //  开发文档



4、启动 dva 项目
    npm start

5、安装 antd ui 组件库
    npm install antd babel-plugin-import --save
        安装 babel-plugin-import 是为了能够动态加载仅仅被引入的 antd组件所依赖的样式，而非全部引入。


6、Roadhog
    https://github.com/sorrycc/roadhog/blob/master/README_zh-cn.md
    Roadhog 是一个包含 dev、build 和 test 的命令行工具，他基于 react-dev-utils，和 create-react-app 的体验保持一致。你可以想象他为可配置版的 create-react-app

    npm i roadhog -g
    roadhog dev
    roadhog build
    roadhog test

    roadhog dev 支持 mock 功能，在 .roadhogrc.mock.js 中进行配置，支持基于 require 动态分析的实时刷新，支持 ES6 语法，以及友好的出错提示。

6、redux-saga
    为异步 action

7、配置 antd
    在 .webpackrc 中配置 antd，使 babel-plugin-import 插件生效
        {
        "extraBabelPlugins": [
            ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": true
            }]
          ]
        }
    可以按需导入 antd 的样式


8、安装 path-to-regexp， 匹配路由
    npm install path-to-regexp --save
    使用： https://www.jianshu.com/p/7d2dbfdd1b0f

