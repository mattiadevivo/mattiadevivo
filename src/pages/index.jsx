import * as React from "react";
import Navbar from "../components/navbar";
import EducationEntry from "../components/education-entry";
import { Jumbotron, Container } from "react-bootstrap";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import ExperienceEntry from "../components/experience-entry";
import AboutSection from "../components/about";
import ContactSection from "../components/contact";

const IndexPage = ({ data }) => {
  let educations = data.allContentfulEducation.edges;
  let experiences = data.allContentfulExperience.edges; 
  let person = data.allContentfulPerson.edges[0].node;
  return (
    <React.Fragment>
      <Navbar />
      <AboutSection image={person.image} name={person.name} about={person.about}/>
      <Jumbotron
        style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "8px" }}
      >
        <Container>
          <h2>Experience</h2>
          <ul>
            {experiences.map((item) => (
              <ExperienceEntry 
                key={item.node.id}
                position={item.node.position}
                company={item.node.company}
                startDate={item.node.startDate}
                endDate={item.node.endDate}
                location={item.node.location}
                description={item.node.description}
                works={item.node.works}
              />
            ))}
          </ul>
        </Container>
      </Jumbotron>
      <Jumbotron style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Container>
          <h2>Education</h2>
          <ul>
            {educations.map((item) => (
              <EducationEntry
                key={item.node.id}
                title={item.node.title}
                institute={item.node.institute}
                startDate={item.node.startDate}
                endDate={item.node.endDate}
                location={item.node.location}
                mark={item.node.mark}
                description={item.node.description}
              />
            ))}
          </ul>
        </Container>
      </Jumbotron>
      <ContactSection address={person.address} phone={person.phone} email={person.email}/>
    </React.Fragment>
  );
};

// Single query for all the data, for data formatting see Moment.js
export const eduQuery = graphql`
{
  allContentfulEducation(sort: {fields: [endDate, startDate], order: DESC}) {
    edges {
      node {
        id
        description {
          raw
        }
        startDate(formatString: "MMMM YYYY")
        endDate(formatString: "MMMM YYYY")
        institute
        location
        mark
        title
      }
    }
  }
  allContentfulExperience(sort: {fields: startDate, order: DESC}) {
    edges {
      node {
        company
        id
        endDate(formatString: "MMMM YYYY")
        position
        startDate(formatString: "MMMM YYYY")
        works {
          image
          name
          url
          id
        }
        description {
          description
        }
      }
    }
  }
  allContentfulPerson {
    edges {
      node {
        address
        email
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          id
          title
        }
        name
        about {
          about
        }
        phone
      }
    }
  }
}

`;



export default IndexPage;
