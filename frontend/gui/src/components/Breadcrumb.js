import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react'


export default class BreadcrumbExampleStandard extends Component {
    render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Bank</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section active>View List</Breadcrumb.Section>
            </Breadcrumb>
        );
    }
}