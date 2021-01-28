import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Img from "gatsby-image";

class AboutSection extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
            <Row >
              <Col xs={12}>
                <Img className="mx-auto d-block"
                  fluid={this.props.image.fluid}
                  key={this.props.image.id}
                  alt={this.props.image.title}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "300px",
                    marginTop: "10px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                  }}
                />
              </Col>
            </Row>

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
