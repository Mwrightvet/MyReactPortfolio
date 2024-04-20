import React from "react";
import weatherdashboard from "../assets/weatherdashboard.png";
import mvcapp from "../assets/mvcapp.png";
import getInspirred from "../assets/get-inspirred.png";
import leafletproject from "../assets/leafletproject.png";

const Projects = () => {
  const projects = [
    {
      img: mvcapp,
      title: "mvcapp",
      desc: " Community sharing platform built in MVC structure, login authentication, view components, database management, and routes/controllers setup. ",
      live: "https://share-sphere-68ac42e28aff.herokuapp.com/",
      code: "https://github.com/kerilsen/share-sphere",
    },
    {
      img: leafletproject,
      title: "leafletproject",
      desc: "Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude. Built with HTML, Css and JavaScript",
      live: "https://mwrightvet.github.io/leaflet-challenge/",
      code: "https://github.com/Mwrightvet/leaflet-challenge",
    },
    {
      img: weatherdashboard,
      title: "weatherdashboard",
      desc: "Frontend Weather Dashboard Application",
      live: "https://mwrightvet.github.io/weather-tracker/",
      code: "https://github.com/Mwrightvet/weather-tracker",
    },
    {
      img: dayscheduler,
      title: "dayscheduler",
      desc: "A simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app. Built with HTML and CSS powered by jQuery",
      live: "https://mwrightvet.github.io/My-Day-Scheduler/",
      code: "https://github.com/Mwrightvet/My-Day-Scheduler",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with HTML,
            JavaScript, React, MERN and/or vanilla CSS. I have a variety of
            projects. Please check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
