import React, { useEffect, useState } from 'react';
import { Carousel, Image, Modal, Row, Col, Card, Button } from 'react-bootstrap';

import { products } from '../../config.js';

const HomeComponent = () => {
    const [result, setResult] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState(null);
    const [slideId, setSlideId] = useState(0);

    const handleSelect = (selectedIndex) => {
        setSlideId(selectedIndex);
    };

    const handleModalShow = (index) => {
        setId(index);
        setModalShow(true);
        setSlideId(0); // Reset slide index when opening modal
    };

    const handleModalClose = () => {
        setModalShow(false);
        setId(null);
    };

    useEffect(() => {
        setResult(products);
    }, []);

    return (
        <Row className="py-4">
            {result &&
                result.map((product, index) => (
                    <Col className="text-center" key={index}>
                        <Card className="shadow">
                            <Card.Img variant="top" src={product.thumbnail} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-truncate">{product.title}</Card.Title>
                                <Card.Text className="text-truncate">{product.description}</Card.Text>
                                <Button onClick={() => handleModalShow(index)}><span className="font-apple">Details</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            <Modal size="lg" show={modalShow} onHide={handleModalClose} aria-labelledby="contained-modal-title-vcenter" centered>
                {id !== null && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                {products[id].brand} {products[id].category}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="text-center align-items-center justify-content-center">
                            <Carousel activeIndex={slideId} onSelect={handleSelect}>
                                {products[id].images.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <Image thumbnail src={image} alt={`Slide ${index}`} fluid />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                                <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '10px' }}>
                                    <h3 className="fw-bold">{products[id].title}</h3>
                                    <p>{products[id].description}</p>
                                </Carousel.Caption>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success"><span className="font-apple">Buy</span></Button>
                            <Button variant="danger" onClick={handleModalClose}><span className="font-apple">Close</span></Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </Row>
    );
};

export default HomeComponent;