import React, { Component } from 'react';
import { } from 'semantic-ui-react';

import SegmentExamplePlaceholderGrid from './components/Segment';
import ContainerExampleContainer from './components/Container';
import Banks from './components/Banks';
import AddBank from './components/AddBank';


class App extends Component {
    constructor() {
        super();
        this.state = {
            bank: [
                {
                    title: "Bank Mandiri",
                    category: "Stated Owned Bank"
                },
                {
                    title: "BJB",
                    category: "Regional Bank"
                },
                {
                    title: "BCA",
                    category: "Private Forex Bank"
                },
                {
                    title: "Bank Mantap",
                    category: "Private Non Forex Bank"
                },
                {
                    title: "Bank BTPN",
                    category: "Joint Venture Bank"
                },
                {
                    title: "Citibank",
                    category: "Foreign Bank"
                }
            ]
        }
    }

    state = {
        bank: []
    };

    // componentWillMount() {
    //     this.setState({
    //         banks: [
    //             {
    //                 title: "Bank Mandiri",
    //                 category: "Stated Owned Bank"
    //             },
    //             {
    //                 title: "BJB",
    //                 category: "Regional Bank"
    //             },
    //             {
    //                 title: "BCA",
    //                 category: "Private Forex Bank"
    //             },
    //             {
    //                 title: "Bank Mantap",
    //                 category: "Private Non Forex Bank"
    //             },
    //             {
    //                 title: "Bank BTPN",
    //                 category: "Joint Venture Bank"
    //             },
    //             {
    //                 title: "Citibank",
    //                 category: "Foreign Bank"
    //             }
    //         ]
    //     });
    // }

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const bank = await res.json();
            this.setState({
                bank
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="App" >

                <SegmentExamplePlaceholderGrid />

                <ContainerExampleContainer />

                <AddBank />

                <Banks banks={this.state.bank} />


            </div>
        );
    }
}

export default App;
