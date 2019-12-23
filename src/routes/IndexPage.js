import React from 'react';
import { Button, Table } from 'antd';
import { connect } from 'dva';

class IndexPage extends React.Component {
    changeData = () => {
        console.log("Change Data");
        const { dispatch } = this.props;

        dispatch({
            type: 'indexpage/addUser',
            param: {}, //这个表示要传递参数，当然这里可以是一个方法，作为回调方法
        })
    };

    render() {
        const { columns, data } = this.props.indexpage; //获取indexpage中的state
        return (
            <div>
                <Button type="primary" onClick={this.changeData}>修改数据</Button>
                <div>
                    <Table columns={columns} dataSource={data}/>
                </div>
            </div>
        )
    }
}

// 将 store 的 indexpage state 附加到 当前的 this.props 上，即： 可以通过 this.props.indexpage 来获取 当前 state
// state 为总的 state
const mapStateToProps = state => {
    // return state;
    return {
        indexpage: state.indexpage
    };
};

// 进行连接
export default connect(mapStateToProps)(IndexPage);


