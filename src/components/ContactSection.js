import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactSection = () => {
    const [state, setState] = useState({name:'', email:'', message:''})

    const onSubmit = (event) => {
        event.preventDefault()
    }
    const onInputChange = (event) =>{
        setState({...state, [event.target.name]:event.target.value})
    }

    return(
        <div id="contact-section">
            <h2>Contact Me</h2>
            <Form onSubmit={onSubmit} className="contact-form">
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" name="name" type="text" value={state.name} onChange={onInputChange} /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" name="email" type="email" value={state.email} onChange={onInputChange} /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea" rows="3" value={state.message} onChange={onInputChange} /> 
                </Form.Group>
                <Button type="submit">Send</Button>
            </Form>
        </div>
    )
}

export default ContactSection