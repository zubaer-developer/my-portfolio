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
    <section id="about" className="py-20 bg-base-100">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          {/* Underline decoration */}
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and what drives me
            forward
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            {/* Decorative container for image */}
            {/* relative: for positioning child elements */}
            <div className="relative">
              {/* Background decoration */}
              {/* absolute: positioned relative to parent */}
              <div className="absolute -top-4 -left-4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-lg -z-10"></div>
              {/* Main image */}
              <img
                src={profilePhoto}
                alt="MD. ZUBAER HOSSAIN"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-lg shadow-xl"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">2+</p>
                <p className="text-sm">Years Coding</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div>
            {/* Subtitle */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Full Stack Developer based in Bangladesh
            </h3>

            {/* Description paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {aboutInfo.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Quick info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="font-semibold text-gray-800">Name:</span>
                <span className="text-gray-600 ml-2">MD. ZUBAER HOSSAIN</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Email:</span>
                <span className="text-gray-600 ml-2 text-sm">
                  zubaer.developer@gmail.com
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">From:</span>
                <span className="text-gray-600 ml-2">Bangladesh</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Status:</span>
                <span className="text-green-600 ml-2">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Journey Card */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body">
              {/* Icon */}
              <div className="text-4xl text-primary mb-4">
                {aboutInfo.journey.icon}
              </div>
              {/* Title */}
              <h3 className="card-title text-gray-800">
                {aboutInfo.journey.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{aboutInfo.journey.description}</p>
            </div>
          </div>

          {/* Work Card */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body">
              <div className="text-4xl text-primary mb-4">
                {aboutInfo.work.icon}
              </div>
              <h3 className="card-title text-gray-800">
                {aboutInfo.work.title}
              </h3>
              <p className="text-gray-600">{aboutInfo.work.description}</p>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="card bg-base-200 hover:shadow-xl transition-shadow duration-300">
            <div className="card-body">
              <div className="text-4xl text-primary mb-4">
                <FaGamepad />
              </div>
              <h3 className="card-title text-gray-800">My Hobbies</h3>
              {/* Hobbies badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {aboutInfo.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="badge badge-primary badge-outline gap-1 py-3"
                  >
                    {hobby.icon}
                    {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts / Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200">
          {/* Stat 1 */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaCode className="text-3xl" />
            </div>
            <div className="stat-title">Projects Completed</div>
            <div className="stat-value text-primary">10+</div>
            <div className="stat-desc">And counting...</div>
          </div>

          {/* Stat 2 */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaCoffee className="text-3xl" />
            </div>
            <div className="stat-title">Cups of Coffee</div>
            <div className="stat-value text-primary">100+</div>
            <div className="stat-desc">Fuel for coding</div>
          </div>

          {/* Stat 3 */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaLaptopCode className="text-3xl" />
            </div>
            <div className="stat-title">Hours of Coding</div>
            <div className="stat-value text-primary">200+</div>
            <div className="stat-desc">Learning never stops</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
