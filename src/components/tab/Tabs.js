import React from 'react';
import Tab from 'Tab';

export default class Tabs extends React.Component{

    constructor(props) {
        super();
        this.state = {
            tabs : []
        }
    }

    addTab() {
        let newelement = {

        }
        this.setState({
            tabs :[...this.state.tabs, newelement]
        });

    }

    render() {
        const {title} = this.props;

        return(
            <Tab title={{title}}/>
        )
    }
}