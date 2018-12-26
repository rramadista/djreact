import React, { Component } from 'react';
import BankItem from './BankItem';
import { Segment, Container, List } from 'semantic-ui-react';


export default class Banks extends Component {    
    render() {
        let bankItems;
        if(this.props.banks) {
            bankItems = this.props.banks.map(bank => {
               return(
                   <BankItem key={bank.title} bank={bank}/> 
               ); 
            });
        }

        return (
            <div className="Banks">
                <Container>
                    <Segment>
                        <List divided relaxed>
                            {bankItems}
                        </List>
                    </Segment>
                </Container>
            </div>
        )
    }
}