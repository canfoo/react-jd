import React, { Component } from 'react';

const simpleHoc = WrappedComponent => {
    return class extends Component {
        render() {
            console.log('simpleHoc', this.props);
            return <WrappedComponent {...this.props}/>
        }
    }
}
export default simpleHoc;
