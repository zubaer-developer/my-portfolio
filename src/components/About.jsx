import {
  FaCode,
  FaLaptopCode,
  FaGamepad,
  FaMusic,
  FaBookReader,
  FaCoffee,
} from "react-icons/fa";
import { MdOutlineSportsEsports } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import profilePhoto from "../assets/profile.jpg";

const About = () => {
  // About information - For easy change
  const aboutInfo = {
    // Main description paragraphs
    description: [
      "Hi there! I'm Zubaer, a passionate Full Stack Developer from Bangladesh. I started my programming journey in 2022, and since then, I've been on an exciting adventure of learning and building amazing web applications.",
      "I believe in writing clean, maintainable code and creating user-friendly experiences. Every project I work on is an opportunity to learn something new and push my boundaries further.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying my hobbies. I'm always eager to take on new challenges and collaborate with like-minded individuals.",
    ],

    // Journey info
    journey: {
      title: "My Journey",
      icon: <FaCode />,
      description:
        "Started coding in 2022 and fell in love with web development. From writing my first 'Hello World' to building full-stack applications, every step has been an incredible learning experience.",
    },

    // Work preference
    work: {
      title: "What I Love",
      icon: <FaLaptopCode />,
      description:
        "I enjoy building modern web applications that solve real-world problems. Creating intuitive user interfaces and robust backend systems gives me immense satisfaction.",
    },

    // Hobbies
    hobbies: [
      { name: "Gaming", icon: <MdOutlineSportsEsports /> },
      { name: "Music", icon: <FaMusic /> },
      { name: "Movies", icon: <BiMoviePlay /> },
      { name: "Reading", icon: <FaBookReader /> },
      { name: "Coffee", icon: <FaCoffee /> },
    ],
  };

  return (
    <section
      id="about"
      className="py-24 bg-base-100 transition-colors duration-300"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            About <span className="text-primary italic">Me</span>
          </h2>
          {/* Underline decoration */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-12 h-1.5 bg-primary rounded-full"></div>
            <div className="w-4 h-1.5 bg-secondary rounded-full"></div>
          </div>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            Get to know me better — my journey, passion, and what drives me
            forward
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            {/* Decorative container for image */}
            {/* relative: for positioning child elements */}
            <div className="relative group">
              {/* Background decoration */}
              {/* absolute: positioned relative to parent */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-primary/30 rounded-2xl -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-2xl -z-20 group-hover:bottom-2 group-hover:right-2 transition-all duration-500"></div>

              {/* Main image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-base-100">
                <img
                  src={profilePhoto}
                  alt="MD. ZUBAER HOSSAIN"
                  className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-8 right-8 md:-right-8 bg-primary text-primary-content p-5 rounded-2xl shadow-2xl flex flex-col items-center min-w-[120px] animate-bounce-slow">
                <span className="text-3xl font-black">2+</span>
                <span className="text-xs uppercase font-bold tracking-widest">
                  Years Exp.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col gap-6">
            {/* Subtitle */}
            <h3 className="text-3xl font-bold text-base-content leading-tight">
              Crafting Digital Solutions <br />
              <span className="text-primary">Based in Bangladesh</span>
            </h3>

            {/* Description paragraphs */}
            <div className="space-y-4 text-base-content/80 text-lg leading-relaxed">
              {aboutInfo.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 bg-base-200/50 p-6 rounded-2xl border border-base-content/5">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-primary tracking-tighter">
                  Name
                </span>
                <span className="text-base-content font-medium">
                  MD. ZUBAER HOSSAIN
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-primary tracking-tighter">
                  Email
                </span>
                <span className="text-base-content font-medium break-all">
                  zubaer.developer@gmail.com
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-primary tracking-tighter">
                  From
                </span>
                <span className="text-base-content font-medium">
                  Chapai Nawabganj, BD
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-primary tracking-tighter">
                  Status
                </span>
                <span className="flex items-center gap-2 text-success font-bold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                  </span>
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Journey Card */}
          <div className="group bg-base-200 p-8 rounded-3xl hover:bg-primary transition-all duration-500 hover:-translate-y-2 border border-base-content/5">
            <div className="text-5xl text-primary group-hover:text-primary-content mb-6 transition-colors">
              {aboutInfo.journey.icon}
            </div>
            <h3 className="text-2xl font-bold text-base-content group-hover:text-primary-content mb-4 transition-colors">
              {aboutInfo.journey.title}
            </h3>
            <p className="text-base-content/70 group-hover:text-primary-content/90 transition-colors leading-relaxed">
              {aboutInfo.journey.description}
            </p>
          </div>

          {/* Work Card */}
          <div className="group bg-base-200 p-8 rounded-3xl hover:bg-secondary transition-all duration-500 hover:-translate-y-2 border border-base-content/5">
            <div className="text-5xl text-primary group-hover:text-secondary-content mb-6 transition-colors">
              {aboutInfo.work.icon}
            </div>
            <h3 className="text-2xl font-bold text-base-content group-hover:text-secondary-content mb-4 transition-colors">
              {aboutInfo.work.title}
            </h3>
            <p className="text-base-content/70 group-hover:text-secondary-content/90 transition-colors leading-relaxed">
              {aboutInfo.work.description}
            </p>
          </div>

          {/* Hobbies Card */}
          <div className="bg-base-200 p-8 rounded-3xl border border-base-content/5 shadow-inner">
            <div className="text-5xl text-primary mb-6">
              <FaGamepad />
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-6">
              My Hobbies
            </h3>
            <div className="flex flex-wrap gap-3">
              {aboutInfo.hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-base-300 text-base-content rounded-xl font-medium text-sm hover:bg-primary hover:text-primary-content transition-all cursor-default"
                >
                  {hobby.icon}
                  {hobby.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts / Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow-2xl w-full bg-neutral text-neutral-content rounded-3xl overflow-hidden border border-neutral-focus">
          {/* Stat 1 */}
          <div className="stat place-items-center py-10">
            <div className="stat-figure text-secondary">
              <FaCode className="text-4xl" />
            </div>
            <div className="stat-title text-neutral-content/70 uppercase tracking-widest text-xs font-bold">
              Projects Done
            </div>
            <div className="stat-value text-secondary text-5xl">10+</div>
            <div className="stat-desc text-neutral-content/50">
              And counting...
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat place-items-center py-10 border-base-content/10">
            <div className="stat-figure text-primary">
              <FaCoffee className="text-4xl" />
            </div>
            <div className="stat-title text-neutral-content/70 uppercase tracking-widest text-xs font-bold">
              Coffee Consumed
            </div>
            <div className="stat-value text-primary text-5xl">100+</div>
            <div className="stat-desc text-neutral-content/50">
              Fueled by caffeine
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat place-items-center py-10 border-base-content/10">
            <div className="stat-figure text-accent">
              <FaLaptopCode className="text-4xl" />
            </div>
            <div className="stat-title text-neutral-content/70 uppercase tracking-widest text-xs font-bold">
              Coding Hours
            </div>
            <div className="stat-value text-accent text-5xl">500+</div>
            <div className="stat-desc text-neutral-content/50">
              Continuous learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
