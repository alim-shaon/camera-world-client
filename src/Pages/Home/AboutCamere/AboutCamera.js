import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import faqimg from "../../../images/faq.jpg";

const AboutCamera = () => {
  return (
    <div>
      <Container className="my-5">
        <div className="d-flex align align-items-center my-4 pt-4">
          <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
          <h1>About Cameras</h1>
          <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
        </div>
        <Row xs={1} md={2} lg={2} className="g-4 align-items-center">
          <Col className="my-5">
            <img className="w-100" src={faqimg} alt="" />
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Compact Digital Cameras</Accordion.Header>
                <Accordion.Body>
                  Also known as point-and-shoot cameras, compact digital cameras
                  are small, easy to use, and affordable, making them the
                  perfect entry-level camera. While they offer some flexibility
                  in their manual settings, they’re typically used for quick
                  shots. Point-and-shoot cameras also include a built-in flash.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Digital SLR Cameras</Accordion.Header>
                <Accordion.Body>
                  If you're looking for a more versatile workhorse, DSLR cameras
                  are perfect for you. Whether it’s photography or videography,
                  DSLR cameras can capture incredibly sharp photos and videos.
                  These cameras have interchangeable lenses with more flexible
                  manual settings and accessories. While they’re heavier and
                  larger than compact cameras, they offer superior image and
                  video quality.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Mirrorless Cameras</Accordion.Header>
                <Accordion.Body>
                  Mirrorless cameras are typically bigger than point-and-shoot
                  cameras but are smaller than DSLR cameras. These cameras don't
                  have reflective mirrors in their bodies like DSLR cameras do
                  (hence the term "mirrorless"). Instead, light goes directly
                  into the sensor. Mirrorless cameras also have interchangeable
                  lenses and are commonly used by intermediate to professional
                  photographers.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Film Cameras</Accordion.Header>
                <Accordion.Body>
                  These are your traditional cameras that require the use of
                  film to develop the image. The resulting images have a
                  distinctly vintage aesthetic, which is why many photographers
                  still use such cameras in our digital era. Unlike digital
                  cameras, film cameras require additional costs such as film
                  and development.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutCamera;
