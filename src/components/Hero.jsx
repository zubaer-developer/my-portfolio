import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import profilePhoto from "../assets/profile.jpg";

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
      twitter: "https://twitter.com",
      facebook: "https://www.facebook.com/zubaer.hossain/",
      email: "zubaer.developer@gmail.com",
    },
  };

  return (
    <section
      id="home"
      className="py-24 bg-base-100 transition-colors duration-300"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 z-10">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              {/* Greeting */}
              <p className="text-xl font-medium text-primary tracking-wide">
                {personalInfo.greeting}
              </p>

              {/* Name */}
              <h1 className="text-5xl font-black text-base-content tracking-tight">
                {personalInfo.name.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      i === personalInfo.name.split(" ").length - 1
                        ? "text-primary"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Designation */}
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                <h2 className="text-lg md:text-xl font-bold text-secondary uppercase tracking-widest">
                  {personalInfo.designation}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-base-content/70 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {personalInfo.description}
            </p>

            {/* Buttons Container */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {/* Resume Download Button */}
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                download="Zubaer_Hossain_Resume.pdf"
                className="btn btn-primary btn-lg shadow-lg shadow-primary/30 gap-2 normal-case hover:scale-105 transition-transform"
              >
                <FaDownload className="animate-bounce" />
                Download Resume
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="btn btn-outline btn-primary btn-lg normal-case hover:scale-105 transition-transform"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start pt-6">
              {[
                {
                  icon: <FaGithub />,
                  link: personalInfo.social.github,
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin />,
                  link: personalInfo.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter />,
                  link: personalInfo.social.twitter,
                  label: "Twitter",
                },
                {
                  icon: <FaFacebook />,
                  link: personalInfo.social.facebook,
                  label: "Facebook",
                },
                {
                  icon: <HiMail />,
                  link: `mailto:${personalInfo.social.email}`,
                  label: "Email",
                },
              ].map((soc, index) => (
                <a
                  key={index}
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn btn-circle btn-ghost bg-base-200 text-xl hover:bg-primary hover:text-primary-content transition-all duration-300"
                  title={soc.label}
                >
                  <span className="group-hover:rotate-12 transition-transform">
                    {soc.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            {/* Photo Container with animated rings */}
            <div className="relative">
              {/* Animated outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow"></div>

              <div className="avatar">
                <div className="w-64 md:w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src={profilePhoto}
                    alt="MD. ZUBAER HOSSAIN"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 -left-4 bg-base-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-base-content/10 animate-bounce-slow">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-xs font-bold">
                    JS
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-content text-xs font-bold">
                    RE
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-tighter">
                  Stack Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
