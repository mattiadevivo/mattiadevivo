import React, { Component } from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';

const cardStyle = {
  backgroundColor: "#e9ecef",
};

class ContactSection extends Component {
  render() {
    return (
      <section>
        <Container id="contact">
          <Row>
            <Col sm={6} md={4} style={{ marginBottom: "10px" }}>
              <Card className="py-4 h-100" style={cardStyle}>
                <Card.Body className="text-center">
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-70">{this.props.address}</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ marginBottom: "10px" }}>
              <Card className="py-4 h-100" style={cardStyle}>
                <Card.Body className="text-center">
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-70">
                      {this.props.email}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} style={{ marginBottom: "10px" }}>
              <Card className="py-4 h-100" style={cardStyle}>
                <Card.Body className="text-center">
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-70">{this.props.phone}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ContactSection;
