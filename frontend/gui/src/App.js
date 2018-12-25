import React, { Component } from 'react';
import { } from 'semantic-ui-react';

import SegmentExamplePlaceholderGrid from './components/Segment';
import ContainerExampleContainer from './components/Container';


class App extends Component {
    render() {
        return ( 
            <div className = "App" >

                <SegmentExamplePlaceholderGrid/>

                <ContainerExampleContainer/>

            </div>
        );
    }
}

export default App;
