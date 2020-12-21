import React, { Component } from "react";
import { Container, Image, Row, Col, Jumbotron } from "react-bootstrap";

class AboutSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <div style={{ textAlign: "center" }}>
            <Image
              src={this.props.image.fluid.src}
              width={300}
              height={300}
              fluid
              style={{
                marginTop: "10px",
                borderStyle: "solid",
                borderWidth: "1px",
              }}
              alt="Photo about Mattia De Vivo"
            />
            <Row className="justify-content-md-center">
              <Col className="col-md-auto">
                <span
                  style={{
                    color: "#dddddd",
                    margin: "10px",
                    fontSize: "60px",
                  }}
                >
                  {this.props.name}
                </span>
              </Col>
            </Row>
          </div>
        </Container>
        <Jumbotron
          style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "8px" }}
        >
          <Container>
            <h2>About me</h2>
            <p>{this.props.about.about}</p>
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default AboutSection;
