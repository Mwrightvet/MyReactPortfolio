import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Melissa. I am a Frontend Developer. I am a product
            Owner for Excelity.
          </p>
          <p className="pb-5">
            Technical Product Owner with experience as a Front End Software
            Developer. Experience with the Software Development Life Cycle
            (SDLC), research and analysis and leadership. Helping customers
            derive maximum value from our application is not just a goal but a
            passion. I act as a reliable bridge between our customers and the
            development teams, providing unwavering support, tailored guidance,
            and effective solutions to enhance user experience and efficient
            workflows. Personally enjoy creative solutions and staying current
            in software development tools and applications.
          </p>
          <p>
            Technical Skills Tools: Microsoft Office, VBA, R, Tableau, Jira,
            Palantir, JupyterNotebook Databases: SQL Databases (MySQL, SQLite,
            PostgreSQL), MongoDB, Google Sheets, SharePoint Programming: Python
            3, NumPy, Pandas, Matplotlib, API Interactions Development: Git, VS
            Code, HTML, CSS, JS, Bootstrap, Dashboarding, JavaScript, D3.js, Geo
            Mapping with Leaflet.js, Vue.js
          </p>
          <p>
            Formal Education & Certifications UC Berkeley Extension Full Stack
            Web Development Bootcamp (2024) UC Berkeley Extension Data Analytics
            Bootcamp (2020) Webster University MBA Trident University BSBA
            CompTIA Security + ce Certificate (2022) Amazon Web Services Cloud
            Certified Practitioner (2022)
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
