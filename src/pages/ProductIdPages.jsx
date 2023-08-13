import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Carousel, Table, Image, Row, Col } from 'react-bootstrap';

import { products } from '../../product.json';

const ProductIdPages = () => {
    const [slideId, setSlideId] = useState(0);
    const { id } = useParams();

    const handleSelect = (selectedIndex) => {
        setSlideId(selectedIndex);
    };
    return (
        <div className="detail-page">
            <Container className="py-5 min-vh-100 justify-content-center align-items-center text-center">
                <Row lg={1} sm={1} className="my-5 d-flex">
                    <Col className="my-5">
                        <h1 className="fw-bold text-center font-tilt text-decoration-underline">Product details</h1>
                        <p className="mt-3 text-center text-small fw-bold">
                            "Discover the essence of perfection with our product's intricate details. Elevate your experience with every use, and indulge in the ultimate luxury of quality craftsmanship."
                        </p>
                    </Col>
                    <Col>
                        <Carousel data-bs-theme="dark" activeIndex={slideId} onSelect={handleSelect}>
                            {products[id - 1].images.map((image, index) => (
                                <Carousel.Item key={index}>
                                    <img className="slide-img d-block" src={image} alt={`Slide ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col className="text-dark mt-5">
                        <h3 className="fw-bold">{products[id - 1].title}</h3>
                        <p>{products[id - 1].description}</p>
                    </Col>
                    <Col className="py-5">
                        <Table striped responsive='sm'>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>brand</th>
                                    <th>category</th>
                                    <th>rating</th>
                                    <th>price</th>
                                    <th>Discount</th>
                                    <th>stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{products[id - 1].title}</td>
                                    <td>{products[id - 1].brand}</td>
                                    <td>{products[id - 1].category}</td>
                                    <td>{products[id - 1].rating}</td>
                                    <td>{products[id - 1].price}</td>
                                    <td>{products[id - 1].discountPercentage}</td>
                                    <td>{products[id - 1].stock}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductIdPages;