import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Container, Nav, Form, Navbar } from 'react-bootstrap';

import { title, navLink } from '../../config.js';

const NavbarComponent = () => {
    const location = useLocation();
    const [breadcrumbItems, setBreadcrumbItems] = useState([]);

    const updateBreadcrumb = (pathname) => {
        const breadcrumbArray = [];
        const matchedLinks = navLink.filter(item => pathname.includes(item.link));
        if (matchedLinks.length > 0) {
            matchedLinks.forEach(matchedLink => {
                breadcrumbArray.push(matchedLink);
            });
        }
        setBreadcrumbItems(breadcrumbArray);
    };

    useEffect(() => {
        updateBreadcrumb(location.pathname);
    }, [location.pathname]);

    return (
        <>
            <Navbar expand="lg" data-bs-theme="dark" sticky="top">
                <Container fluid className="rounded-bottom-3 py-2">
                    <Navbar.Brand className="font-tilt">{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav fill variant="tabs" className="me-auto mx-auto my-2 my-lg-0" navbarScroll>
                            {
                                navLink.map((item, index) => (
                                    <Nav.Item key={index} className="px-2">
                                        <NavLink className="text-decoration-none" to={item.link} end>
                                            {item.name}
                                        </NavLink>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                        <Form className="d-flex mt-lg-0 mt-5">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="dark">
                                <span className="fw-bold">Search</span>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;