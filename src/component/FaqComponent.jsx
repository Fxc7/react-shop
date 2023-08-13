import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

import { faq } from '../../config.js';

const FaqComponent = () => {
    return (
        <div className="faq-page">
            <Container className="min-vh-100 pt-5 content-justify-center text-center">
                <h1 className="fw-bold font-tilt text-decoration-underline" data-aos="zoom-in-up">FAQ</h1>
                <p className="fw-bold text-small" data-aos="zoom-in">"Shop with ease, find all you need. Get answers fast with our FAQ. Experience hassle-free shopping with our online store, your one-stop destination."</p>
                <Accordion className="mt-5">
                    {
                        faq.map((item, index) => (
                            <Accordion.Item eventKey={index} key={index} data-aos={item.animate}>
                                <Accordion.Header>
                                    <span className="text-small fw-bold">{item.question}</span>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span className="text-small fw-bold">{item.answer}</span>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            </Container>
        </div>
    )
}

export default FaqComponent