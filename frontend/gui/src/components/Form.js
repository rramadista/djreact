import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'sob', text: 'Stated Owned Bank', value: 'Stated Owned Bank' },
    { key: 'rb', text: 'Regional Bank', value: 'Regional Bank' },
    { key: 'pfb', text: 'Private Forex Bank', value: 'Private Forex Bank' },
    { key: 'pnfb', text: 'Private Non-Forex Bank', value: 'Private Non-Forex Bank' },
    { key: 'jvb', text: 'Joint Venture Bank', value: 'Joint Venture Bank' },
    { key: 'fb', text: 'Foreign Bank', value: 'Foreign Bank' },
]

export default class FormExampleSubcomponentControl extends Component {
    state = { name: '', category: '', submittedName: '', submittedCategory: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, category } = this.state

        if(name === '') {
            alert('Title is required!');
        } else {
            alert('OK!');
        }

        this.setState({ submittedName: name, submittedCategory: category })
    }

    render() {
        const { name, category, submittedName, submittedCategory } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
                        <Form.Select placeholder='Category' options={options} name='category' value={category} onChange={this.handleChange}/>
                        <Form.Button content='Submit' />
                    </Form.Group>
                </Form>

                <strong>onChange:</strong>
                <pre>{JSON.stringify({ name, category }, null, 2)}</pre>

                <strong>onSubmit:</strong>
                <pre>{JSON.stringify({ submittedName, submittedCategory }, null, 2)}</pre>

            </div>
        )
    }
}
