import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { products } from '../../config.js';

const HomeComponent = () => {
    const [result, setResult] = useState();
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
                                <Button onClick={() => window.open('products/' + product.category + '/' + product.id, '_blank')}><span className="font-apple">Details</span></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </Row >
    );
};

export default HomeComponent;