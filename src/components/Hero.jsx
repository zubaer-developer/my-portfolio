import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const personalInfo = {
    greeting: "Hello, I'm",
    name: "MD. ZUBAER HOSSAIN",
    designation: "Full Stack Developer",
    description:
      "Passionate about building modern web applications with clean code and great user experience. I love turning ideas into reality through code.",
    resumeLink: "/resume.pdf", // store resume in public folder
    social: {
      github: "https://github.com/zubaer-developer",
      linkedin: "https://www.linkedin.com/in/md-zubaer-hossain-137134356/",
      email: "zubaer.developer@gmail.com",
    },
  };
  return (
    <section id="home" className="min-h-screen flex items-center bg-base-200">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-10 w-full">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-lg text-gray-600 mb-2">
              {personalInfo.greeting}
            </p>

            {/* Name */}
            <h1 className="text-4xl font-bold text-primary mb-3">
              {personalInfo.name}
            </h1>

            {/* Designation */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              {personalInfo.designation}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {personalInfo.description}
            </p>

            {/* Buttons Container */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              {/* Resume Download Button */}
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                <FaDownload />
                Download Resume
              </a>

              {/* Contact Button */}
              <a href="#contact" className="btn btn-outline btn-primary">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* GitHub */}

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-2xl hover:text-primary hover:bg-primary/10 transition-all"
                title="GitHub"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-2xl hover:text-primary hover:bg-primary/10 transition-all"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.social.email}`}
                className="btn btn-circle btn-ghost text-2xl hover:text-primary hover:bg-primary/10 transition-all"
                title="Email"
              >
                <HiMail />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            {/* Photo Container */}
            <div className="avatar">
              <div className="w-64 md:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img
                  src={profile}
                  alt="MD. ZUBAER HOSSAIN"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
