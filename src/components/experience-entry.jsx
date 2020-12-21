import React, { Component } from "react";
import {Row, Image} from 'react-bootstrap';

class ExperienceEntry extends Component {
  render() {
    return (
      <li>
        <h5>
          {this.props.position} -{" "}
          <span style={{ color: "#555555" }}>{this.props.company}</span>
        </h5>
        <h6>
          {this.props.startDate} - {this.props.endDate ?? "Present"},{" "}
          {this.props.location}
        </h6>
        <p>{this.props.description.description}</p>
        {this.props.works !== null
          ? this.props.works.map((item) => (
              <Row style={{ marginBottom: 8 }} key={item.id}>
                <Image
                  src={item.image}
                  width={70}
                  height={70}
                  alt="Project Icon"
                />
                <h6 style={{ marginLeft: 8 }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </h6>
              </Row>
            ))
          : null}
      </li>
    );
  }
}

export default ExperienceEntry;
