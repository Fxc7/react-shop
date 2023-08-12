import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactComponent = () => {
    return (
        <Container className="page-contact min-vh-100 py-5">
            <Row className="justify-content-center">
                <Col lg={6}>
                    <h2 className="mb-4 font-tilt text-center fw-bold text-decoration-underline">Contact US</h2>
                    <p className="text-center fw-bold text-small mb-5">"Connect with us for seamless communication and exceptional service. Our doors are always open, so don't hesitate to reach out. Let's build a lasting relationship that exceeds your expectations. Contact us today and experience the difference."</p>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Input your name" />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Input your mail" />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                        </Form.Group>
                        <Button variant="danger" type="submit" className="mt-3">
                            Send message
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactComponent;