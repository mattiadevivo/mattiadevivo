import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <StaticQuery
      query={graphql`
    {
          allContentfulEducation(sort: { fields: [endDate, startDate], order: DESC }) {
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
    }`}
      render={(data) => {
        const educations = data.allContentfulEducation.edges;
        const experiences = data.allContentfulExperience.edges;
        const personalInfo = data.allContentfulPerson.edges[0].node;
        return (<PortfolioProvider value={{ hero, about, projects, contact, footer, educations, experiences, personalInfo }}>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </PortfolioProvider>);
      }

      }
    />

  );
}

export default App;
