import * as React from "react";
import type { HeadFC } from "gatsby";
import SEO from "../components/seo";
import About from "../components/about";
import Education from "../components/education";
import Layout from "../layouts/page-layout";
import { Container } from "@mui/material";

const aboutData = `
Mattia, Developer and Computer Science enthusiast. Since childhood I have been interested in the IT area. I am skilled in high-level programming languages; at the moment I use JavaScript, Go, and Java but I've also worked with Python, C#, Dart, C. Thanks to the variety of my background and my current experience I am building a 360° knowledge of the necessary building blocks for software design, development and deployment. I am pretty confident with some Cybersecurity topics such as Cryptography, Network Security, Traffic Analysis, Penetration Testing, Mobile Security, OS security, Digital Forensics, GDPR and NIS. I am also confident with tools and practical procedures including OWASP, OpenVas, Wireshark, ntop, nmap, Recon-ng. I have proven experience in writing mobile applications with Flutter and I also like to develop Full Stack applications and websites using JavaScript frameworks and libraries such React.js, Angular 2, Express.js and Node.js or Python Django. I like both SQL (Microsoft SQL Server, PostgreSQL, MySQL) and NOSQL (MongoDB, Cloud Firestore, Redis) environments. I am currently working in an IoT company as a DevOps Engineer and studying innovative topics such as Blockchain and Digital Asstes.
`;

const entries = [
  {
    title: "Backend Engineer",
    institute: "Electrolux",
    startDate: "July 2022",
    endDate: null,
    location: "(Remote and occasionaly Pordenone)",
    mark: "110L",
    description:
      "Microservices development. Frontend development (React.js, TypeScript). Defining AWS cloud services with Terraform. DevOps reference person for the backend development team."
  }
];

const IndexPage = (): JSX.Element => {
  return (
    <>
      <SEO />
      <Layout>
        <Container
          sx={{
            marginTop: "10px"
          }}
        >
          <About name="Mattia De Vio" about={aboutData} />
          <Education entries={entries} />
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
