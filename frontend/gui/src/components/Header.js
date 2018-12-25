import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class HeaderExampleSettingsIcon extends Component {
    render() {
        return (
            <Header as='h2'>
                <Icon name='university' />
                <Header.Content>
                    Account Settings
                    <Header.Subheader>
                        Manage your preferences
                    </Header.Subheader>
                </Header.Content>
            </Header>
        );
    }
}