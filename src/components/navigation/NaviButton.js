import React from 'react';

export default class NaviButton extends React.Component {

    _click() {
        //add tab
    }

    render() {
        const { name } = this.props;
        return(
           <button onKeyPress={this._click}>{{name}}</button>
        )
    }
}