import React, { Component } from 'react'
import { Container, Divider } from 'semantic-ui-react'
import StatisticExampleEvenlyDivided from './Statistic';
import HeaderExampleSettingsIcon from './Header';
import BreadcrumbExampleStandard from './Breadcrumb';
import MessageExampleIcon from './Message';


export default class ContainerExampleContainer extends Component {
    render() {
        return (
            <Container>
                                            
                <BreadcrumbExampleStandard/>
        
                <Divider/>

                <HeaderExampleSettingsIcon/>
        
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
                </p>

                <StatisticExampleEvenlyDivided/>

                <MessageExampleIcon/>
        
            </Container>
        );
    }
}