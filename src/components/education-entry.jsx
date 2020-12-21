import React, { Component } from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';   // RichText interpreter

class EducationEntry extends Component {
  render() {
    return (
      <li>
        <h5>
          {this.props.title} -
          <span style={{ color: "#555555" }}> {this.props.institute}</span>
        </h5>
        <h6>{this.props.startDate ?? null}{this.props.startDate !== null ? ' - ': null}{this.props.endDate ?? 'Present'}, {this.props.location}</h6>
        <p>Mark: {this.props.mark}</p>
        {this.props.description !== null ? documentToReactComponents(JSON.parse(this.props.description.raw)) : null }
      </li>
    );
  }
}

export default EducationEntry;
