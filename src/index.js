import dva from 'dva';
import './index.css';

// 1. Initialize  实例化一个dva对象
const app = dva();

// 2. Plugins 添加需要使用到的插件
// app.use({});

// 3. Model 添加需要使用到的model
// app.model(require('./models/example').default);
app.model(require('./models/indexpage').default);

// 4. Router 添加路由配置
app.router(require('./router').default);

// 5. Start 调用dva中的start方法， 该方法接收一个参数，这个参数是html文件中某个元素的id，作为整个应用的挂载点。
// hml文件默认是public目录下的index.html文件
app.start('#root');
