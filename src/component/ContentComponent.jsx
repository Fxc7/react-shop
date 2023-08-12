import React, { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { BiSolidMessageAlt } from 'react-icons/bi';

import HeaderComponent from './HeaderComponent.jsx';
import AboutComponent from './AboutComponent.jsx';
import ContactComponent from './ContactComponent.jsx';

import { notification } from '../../config.js';

const ContentComponent = () => {
    const [toasts, setToasts] = useState([]);

    const closeToast = (index) => {
        setToasts((prevToasts) => prevToasts.filter((_, toastIndex) => toastIndex !== index));
    };

    useEffect(() => {
        const timeout = 5000;
        const additionalTimeout = 5000;
        const maxTimeout = timeout + additionalTimeout;

        const interval = setInterval(() => {
            setToasts((prevToasts) =>
                prevToasts.map((toast) => ({
                    ...toast,
                    show: Date.now() - toast.startTime < maxTimeout,
                }))
            );
        }, 1000);

        setToasts(
            notification.map((item) => ({
                ...item,
                startTime: Date.now(),
                show: true,
            }))
        );

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <HeaderComponent />
            <ToastContainer position="middle-end" className="position-fixed m-0 shadow">
                {toasts.map((item, index) => (
                    <Toast key={index} bg="danger" show={item.show} delay={5000} autohide onClose={() => closeToast(index)}>
                        <Toast.Header>
                            <BiSolidMessageAlt className="me-auto" size={20} />
                            <small className="fw-bold">{moment(item.updated).locale('en').fromNow()}</small>
                        </Toast.Header>
                        <Toast.Body className="fw-bold text-small">{item.message}</Toast.Body>
                    </Toast>
                ))}
            </ToastContainer>
            <AboutComponent />
            <ContactComponent />
        </>
    );
};

export default ContentComponent;