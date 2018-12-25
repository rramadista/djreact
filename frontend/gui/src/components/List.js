import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'


export default class ListExampleDivided extends Component {
    render() {
        return (
            <Segment>
                <List divided relaxed>
                    <List.Item>
                        <List.Icon name='js' size='big' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/JavaScript</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='html5' size='big' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/HTML5</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='css3' size='big' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/CSS3</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='python' size='big' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Python</List.Header>
                            <List.Description as='a'>Updated 48 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='react' size='big' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/React</List.Header>
                            <List.Description as='a'>Updated 52 mins ago</List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        );
    }
}
