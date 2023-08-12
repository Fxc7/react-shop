import React from 'react'
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
    return (
        <Container className="pt-5 pb-3 text-center">
            <footer>
                <p className="fw-bold">
                    &copy; 2023 Farhannnn, All right reserved
                </p>
            </footer>
        </Container>
    );
};

export default FooterComponent;