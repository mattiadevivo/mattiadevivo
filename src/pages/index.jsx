import * as React from "react";
import Navbar from "../components/navbar";
import EducationEntry from "../components/education-entry";
import { Jumbotron, Container } from "react-bootstrap";
import { graphql } from "gatsby";
import { CookieBanner } from '@palmabit/react-cookie-law';

import ExperienceEntry from "../components/experience-entry";
import AboutSection from "../components/about";
import ContactSection from "../components/contact";
import Footer from "../components/footer";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  let educations = data.allContentfulEducation.edges;
  let experiences = data.allContentfulExperience.edges;
  let person = data.allContentfulPerson.edges[0].node;
  return (
    <React.Fragment>
      <Seo>
        {/*FontAwesome  icons */}
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Seo>
      <Navbar />
      <main className="pt-3">
        <AboutSection
          image={person.image}
          name={person.name}
          about={person.about}
        />
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
        <ContactSection
          address={person.address}
          phone={person.phone}
          email={person.email}
        />
        <Footer />
      </main>
      <CookieBanner
        message="Questo sito utilizza dei cookie per monitorare e personalizzare l'esperienza di navigazione degli utenti. Continuando a navigare si autorizza l'utilizzo dei cookie su questo sito."
        wholeDomain={true}
        policyLink="https://www.cookiesandyou.com/"
        privacyPolicyLinkText="Per saperne di più"
        showPreferencesOption={false}
        showStatisticsOption={false}
        showMarketingOption={false}
        managePreferencesButtonText="Preferenze"
        savePreferencesButtonText="Salva e chiudi"
        acceptButtonText="Accetto"
        onAccept={() => { }}
        onAcceptPreferences={() => { }}
        onAcceptStatistics={() => { }}
        onAcceptMarketing={() => { }}
        styles={{
          dialog: {
            position: "fixed",
            width: "100%",
            bottom: "0%",
            left: "0%",
            right: "0%",
            zIndex: "100000",
            backgroundColor: "rgba(0,0,0, 0.8)",
            padding: "10px"
          },
          message: {
            color: "white",
            fontSize: "small"
          },
          button: {
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "small",
            backgroundColor: "#00B0ED",
            border: "1px solid #00B0ED",
            margin: "2px",
            padding: "5px"
          },
          policy: {
            color: "#FFFFFF",
            fontSize: "small"
          }
        }}
      />
    </React.Fragment>
  );
};

// Single query for all the data, for data formatting see Moment.js
export const eduQuery = graphql`
  {
    allContentfulEducation(
      sort: { fields: [endDate, startDate], order: DESC }
    ) {
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
    allContentfulExperience(sort: { fields: [endDate, startDate], order: DESC }) {
      edges {
        node {
          company
          id
          endDate(formatString: "MMMM YYYY")
          position
          location
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
