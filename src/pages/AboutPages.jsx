import React from 'react'
import { Container } from 'react-bootstrap';
import AboutComponent from '../component/AboutComponent.jsx';

const AboutPages = () => {
  return (
    <Container className="min-vh-100 pt-5">
        <AboutComponent />
    </Container>
  );
};

export default AboutPages;