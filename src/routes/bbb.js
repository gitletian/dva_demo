import React from 'react';
import { connect } from 'dva';

class BBB extends React.Component {
    render() {
        return(
            <div>
                <h1>BBB</h1>
            </div>
        );
    }
}

BBB.propsType = {};
export default connect()(BBB);
