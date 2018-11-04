import React from 'react';
import Navi from '../components/navigation/Navi';
import SubMenu from '../components/submenu/SubMenu';
import Tabs from '../components/tab/Tabs';
import Contents from '../components/contents/Contents';

export default class Main extends React.Component {


    render() {
        return(
            <div>
                <Navi/>
                <SubMenu/>
                <Tabs/>
                <Contents/>
            </div>
        )
    }

}