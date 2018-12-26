import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import HeaderExampleSettingsIcon from './Header';
import FormExampleSubcomponentControl from './Form';


export default class AddBank extends Component {    
    render() {
        return (
            <div>
                <Container>
                    <Segment>

                        <HeaderExampleSettingsIcon/>

                        <FormExampleSubcomponentControl/>

                    </Segment>
                </Container>
            </div>
        )
    }
}