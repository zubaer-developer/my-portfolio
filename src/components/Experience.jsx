import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

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
    <section id="experience" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and work experience in web development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-0 w-4 h-4 bg-primary rounded-full"></div>

              {/* Experience Card */}
              <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-4">
                <div className="card-body">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      {/* Job Title */}
                      <h3 className="card-title text-xl text-primary">
                        {exp.title}
                      </h3>
                      {/* Company */}
                      <p className="text-gray-700 font-medium flex items-center gap-2">
                        <FaBriefcase className="text-gray-500" />
                        {exp.company}
                      </p>
                    </div>

                    {/* Duration & Type Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-primary gap-1">
                        <FaCalendarAlt />
                        {exp.duration}
                      </span>
                      <span className="badge badge-outline badge-secondary">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-gray-600 text-sm"
                        >
                          <span className="text-primary mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 rounded-lg px-6 py-4">
            <p className="text-gray-700">
              💼 <span className="font-semibold">Open to Opportunities:</span>{" "}
              I'm actively looking for
              <span className="text-primary font-medium">
                {" "}
                Full-time / Freelance
              </span>{" "}
              opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
