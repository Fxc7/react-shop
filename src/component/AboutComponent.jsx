import { Row, Col, Card } from 'react-bootstrap';
import { title, about, about_text } from '../../config.js';

const AboutComponent = () => {
    return (
        <div className="content-component min-vh-100 pt-5">
            <Row>
                <Col>
                    <h1 className="fw-bold text-center font-tilt">
                        {title}
                    </h1>
                    <p className="text-center">
                        {about_text}
                    </p>
                </Col>
            </Row>
            <Row lg={3} sm={1} className="pt-5 m-3">
                {
                    about.map((item, index) => (
                        <Card key={index} className="text-center align-items-center pt-2">
                            <item.icon size={50} />
                            <h3 className="fw-bold text-center font-tilt">{item.title}</h3>
                            <p className="text-center text-small">
                                {item.description}
                            </p>
                        </Card>
                    ))
                }
            </Row>
        </div>
    );
};

export default AboutComponent;