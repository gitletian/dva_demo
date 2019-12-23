import pathToRegexp from 'path-to-regexp';
import userService from "../services/user";


export default {
    namespace: 'indexpage',
    state: {
        columns: [{
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '性别',
            dataIndex: 'gender',
        }],
        data: [{
            "key": "1",
            "name": "王大斌",
            "gender": "男"
        },{
            "key": "2",
            "name": "刘小洋",
            "gender": "男"
        }]
    },
    // 订阅，这个实际用的少，表示监听当前state的变化
    // Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
    // 数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。
    // 例：（监听路由变化，一旦跳转到'/treatRecord'页面，dispatch reducers的中改变当前页方法）
    subscriptions: {
        // 使用的情况：1、当路由跳转到指定页面时可以操作
        setup({ dispatch, history }) { //setup方法名，随便取
            history.listen( ({ pathname, query }) => {
                const match = pathToRegexp('/aaa').exec(pathname); // 监听路由，正则匹配是否 pathname 是否 为 /aaa
                if(match) {  //一旦符合就修改 页面 数据 为第一页
                    alert("路由跳转了， 正则匹配到了 /aaa 路由");
                    // dispatch({
                    //     type: "ADD_USER",
                    //     payload: {
                    //         myuser: [
                    //             {
                    //                 "key": "20",
                    //                 "name": "oooo",
                    //                 "gender": "subscriptions",
                    //             },
                    //         ]
                    //     }
                    // });
                }
            });
        },
        // 使用的情况：2、只要路由跳转，就执行操作（modal改变，connect的页面也会自动刷新）
        setupHeader({ dispatch, history }) {
            history.listen(({ pathname, query }) => {
                alert("路由跳转了");
                // dispatch({
                //     type: 'ADD_USER',
                //     payload: {
                //         myuser: [
                //             {
                //                 "key": "27",
                //                 "name": "oooo",
                //                 "gender": "subscriptions",
                //             },
                //         ]
                //     }
                // });
            });
        }
    },
    effects: {
        *addUser({ param }, { call, put }) {
            //param是从组件router传递过来的参数,这里就是上面定义的
            //这里的call方法可以使用param参数传递给后台程序进行处理这里，也可以调用service层的方法进行调用后端程序，
            //这里的put表示存储在当前命名空间 indexpage 中，通过save方法存在当前state中

            //在这里可以用ajax调用后台程序处理并返回数据，有很多种处理方式，当然有些处理不需要后端的，可以直接put方法更新state数据

            const myuser = yield call(userService.getUser, {});
            // 更换 key
            myuser.data.forEach(x => {x.key=Math.floor(Math.random() * 10000).toString()});
            yield put({
                type: "ADD_USER", //这个就是调用 reducers 中的方法进行跟新当前命名空间 state 的数据
                payload: {
                    myuser: myuser.data
                }
            });
        }
    },
    reducers: {  //用来保存更新state值 上面的put方法调用这里的方法
        ADD_USER(state, action) { //这里的state是当前总的state，这里的action包含了上面传递的参数和type
            return {
                ...state,
                data:state.data.concat(action.payload.myuser)
                // data: action.payload.myuser
            };
        }
    }
}

