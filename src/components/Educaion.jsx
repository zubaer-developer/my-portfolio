import { FaGraduationCap, FaCertificate, FaLightbulb } from "react-icons/fa";
import EducationCard from "./EducationCard";

const Education = () => {
  // Education Data
  const educationData = [
    {
      id: 1,
      type: "Degree",
      title: "BSc (Hons) in Applied Physics & Electronics Engineering",
      institution: "University of Rajshahi",
      year: "2016",
      subject: "Applied Physics and Electronics Engineering",
      description:
        "Completed bachelor's degree with focus on electronics, physics, and engineering principles.",
    },
    {
      id: 2,
      type: "Certification",
      title: "Complete Web Development Course",
      institution: "Programming Hero",
      year: "2025",
      subject: "Web Development",
      description:
        "6-month intensive training program covering full-stack web development including React, Next JS, Node.js, Express, MongoDB, and modern web technologies.",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-28 bg-base-100 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            Education &{" "}
            <span className="text-primary relative inline-block">
              Certifications
              <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10"></span>
            </span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Building a solid foundation through academic excellence and
            professional specialization.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-base-content/10 to-transparent"></div>

          {/* Left Side - Education */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-2 group">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-500 shadow-lg shadow-primary/5">
                <FaGraduationCap className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-base-content tracking-tight">
                  Academic Education
                </h3>
                <p className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                  Formal Background
                </p>
              </div>
            </div>

            <div className="relative pl-4 space-y-6">
              {educationData
                .filter((item) => item.type === "Degree")
                .map((item) => (
                  <div
                    key={item.id}
                    className="transition-all duration-300 hover:scale-[1.02]"
                  >
                    <EducationCard item={item} />
                  </div>
                ))}
            </div>
          </div>

          {/* Right Side - Certifications */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-2 group">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-500 shadow-lg shadow-secondary/5">
                <FaCertificate className="text-3xl" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-base-content tracking-tight">
                  Professional Certs
                </h3>
                <p className="text-xs font-bold text-secondary/60 uppercase tracking-widest">
                  Verified Expertise
                </p>
              </div>
            </div>

            <div className="relative pl-4 space-y-6">
              {educationData
                .filter((item) => item.type === "Certification")
                .map((item) => (
                  <div
                    key={item.id}
                    className="transition-all duration-300 hover:scale-[1.02]"
                  >
                    <EducationCard item={item} />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-base-200/80 backdrop-blur-xl border border-base-content/5 rounded-[2rem] p-10 md:p-12 text-center overflow-hidden">
            {/* Background Icon */}
            <FaLightbulb className="absolute -right-8 -bottom-8 text-9xl text-base-content/5 rotate-12" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Growth Mindset
            </div>

            <h3 className="text-3xl font-black text-base-content mb-6 tracking-tight">
              Commitment to Continuous Learning
            </h3>

            <p className="text-base-content/70 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              I believe in lifelong learning. Beyond formal education, I
              continuously upgrade my skills through online courses,
              documentation, and hands-on projects. Technology evolves rapidly,
              and I'm committed to staying current with the latest trends to
              build future-proof solutions.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <span className="font-bold text-sm tracking-widest uppercase">
                Self-Taught
              </span>
              <span className="font-bold text-sm tracking-widest uppercase">
                •
              </span>
              <span className="font-bold text-sm tracking-widest uppercase">
                Open Source
              </span>
              <span className="font-bold text-sm tracking-widest uppercase">
                •
              </span>
              <span className="font-bold text-sm tracking-widest uppercase">
                Technical Research
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
