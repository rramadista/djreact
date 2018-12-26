import React, { Component } from 'react';
import { List } from 'semantic-ui-react';


export default class BankItem extends Component {
    render() {
        return (
            <List.Item>
                <List.Icon name='university' size='big' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{this.props.bank.title}</List.Header>
                    <List.Description as='a'>{this.props.bank.category}</List.Description>
                </List.Content>
            </List.Item>    
        );
    }
}