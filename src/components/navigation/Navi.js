import React from 'react';
import NaviButton from 'NaviButton';

export default class Navi extends React.Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <NaviButton name='services'/>
                    </li>
                    <li>
                        <NaviButton name='monitoring'/>
                    </li>
                    <li>
                        <NaviButton name='setup'/>
                    </li>
                </ul>
            </div>
        )
    }
}