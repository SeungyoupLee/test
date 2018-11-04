import React from 'react';

export default class Tab extends React.Component{

    _onClick() {
        // enable
    }

    render() {
        const {title} = this.props;
        return(
            <div onKeyPress={this._onClick}>{{title}}</div>
        )
    }
}