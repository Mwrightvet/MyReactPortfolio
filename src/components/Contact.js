import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to message me on Linkedin
        </p>

        <p className="py-2">
          <span className="font-bold">Linkedin:</span>{" "}
          https://www.linkedin.com/in/melissa-wright-mba/
        </p>
        <p className="py-2">
          <span className="font-bold">Github Repos:</span>{" "}
          https://github.com/Mwrightvet?tab=repositories
        </p>
      </div>
    </section>
  );
};

export default Contact;
