import * as React from "react";
import Navbar from "../components/navbar";
import EducationEntry from "../components/education-entry";
import { Jumbotron, Container } from "react-bootstrap";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = ({data}) => {
  let education = data.allContentfulEducation.edges;
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Container>
          <h2>Education</h2>
          <ul>
            {education.map(item => (<EducationEntry key={item.node.id} title={item.node.title} institute={item.node.institute} date={item.node.date} location={item.node.location} mark={item.node.mark} description={item.node.description}/>))}
          </ul>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

export const eduQuery = graphql`
{
  allContentfulEducation(sort: {fields: position, order: DESC}) {
    edges {
      node {
        id
        description {
          raw
        }
        date
        institute
        location
        mark
        title
      }
    }
  }
}
`

export default IndexPage;
