import React from 'react';
import { connect } from 'dva';

class AAA extends React.Component {
    render() {
        return(
            <div>
                <h1>AAA</h1>
            </div>
        );
    }
}

AAA.propsType = {};
export default connect()(AAA);
