import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Self-Employed",
      duration: "2023 - Present",
      type: "Remote",
      description:
        "Building modern web applications for clients using React, Node.js, and MongoDB. Delivering responsive and user-friendly solutions.",
      responsibilities: [
        "Developed full-stack web applications using MERN stack",
        "Created responsive UI designs with React and TailwindCSS",
        "Implemented RESTful APIs with Node.js and Express",
        "Managed databases using MongoDB",
        "Deployed applications on Vercel and Firebase",
      ],
    },
    {
      id: 2,
      title: "Web Development Trainee",
      company: "Programming Hero",
      duration: "2023 (6 Months)",
      type: "Online Training",
      description:
        "Completed intensive full-stack web development training program with hands-on projects and real-world assignments.",
      responsibilities: [
        "Learned modern JavaScript and React.js",
        "Built multiple full-stack projects",
        "Practiced responsive design techniques",
        "Collaborated on team projects",
        "Completed 10+ assignments and projects",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-28 bg-base-200 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            Work{" "}
            <span className="text-primary underline underline-offset-8 decoration-4 decoration-primary/20">
              Experience
            </span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            <div className="w-4 h-1.5 bg-secondary rounded-full"></div>
          </div>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg leading-relaxed">
            A timeline of my professional growth and the digital solutions I've
            crafted along the way.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full opacity-20"></div>

          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-base-100 border-4 border-primary z-20 shadow-[0_0_15px_rgba(var(--p),0.5)]"></div>

              {/* Content Spacer for Desktop */}
              <div className="hidden md:block w-1/2"></div>

              {/* Experience Card */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-10">
                <div className="group relative bg-base-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-content/5 hover:-translate-y-2">
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card Header */}
                  <div className="relative z-10">
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="text-2xl font-black text-base-content group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex gap-2">
                          <span className="badge badge-primary badge-outline font-bold text-xs uppercase tracking-tighter py-3">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-base-content/60">
                        <span className="flex items-center gap-1.5 bg-base-200 px-3 py-1.5 rounded-full">
                          <FaBriefcase className="text-primary" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 bg-base-200 px-3 py-1.5 rounded-full">
                          <FaCalendarAlt className="text-secondary" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-base-content/70 leading-relaxed mb-6 italic">
                      "{exp.description}"
                    </p>

                    {/* Responsibilities List */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary/80 mb-3">
                        Core Contributions
                      </h4>
                      <div className="grid gap-3">
                        {exp.responsibilities.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="mt-1 text-primary group-hover/item:scale-125 transition-transform">
                              <FaCheckCircle className="text-[14px]" />
                            </div>
                            <span className="text-sm text-base-content/80 group-hover/item:text-base-content transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact CTA Box */}
        <div className="mt-20 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-base-100 px-8 py-6 rounded-2xl border border-base-content/10 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaRocket className="text-3xl text-primary animate-bounce" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-black text-base-content tracking-tight">
                  Ready for the next challenge?
                </h3>
                <p className="text-base-content/60 font-medium">
                  I'm currently{" "}
                  <span className="text-success font-bold underline decoration-2 underline-offset-4">
                    available
                  </span>{" "}
                  for Full-time or Freelance roles.
                </p>
              </div>
              <a
                href="#contact"
                className="btn btn-primary btn-md rounded-xl normal-case px-8 shadow-lg shadow-primary/20"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
