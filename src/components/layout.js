import React from 'react';
import Header from '../components/header';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return(
            <div>
                <Header/>
                <div style={{ background: '#fff', padding: 24 }}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Layout;
