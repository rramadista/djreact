import React, { Component } from 'react'
import { Button, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import SearchExampleCategory from './Search';

export default class SegmentExamplePlaceholderGrid extends Component {
    render() {
        return (
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='search' />
                                Find Bank
                            </Header>
                            <SearchExampleCategory aligned='right'/>
                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='world' />
                                Add New Bank
                            </Header>
                            <Button primary>Create</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}