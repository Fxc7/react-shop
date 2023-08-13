import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { title } from '../../config.js'

const HeaderComponent = () => {
  return (
    <div className="home-page">
      <header>
        <Container>
          <Row className="py-5">
            <Col className="text-center mt-5">
              <h1 className="fw-bold text-light mt-5 font-tilt animate__animated animate__backInDown">Buy things cheaply?</h1>
              <h4 className="fw-bold text-light animate__animated animate__backInUp animate__fast">just at the {title}</h4>
              <small className="fw-bold text-light animate__animated animate__fadeIn animate__delay-1s">Providing good stuff at affordable prices</small>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HeaderComponent;