import React, { Component } from 'react';
import { List } from 'semantic-ui-react';


export default class BankItem extends Component {
    render() {
        return (
            <List.Item>
                <List.Icon name='university' size='big' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{this.props.bank.bank_name}</List.Header>
                    <List.Description>{this.props.bank.category}</List.Description>
                </List.Content>
            </List.Item>    
        );
    }
}