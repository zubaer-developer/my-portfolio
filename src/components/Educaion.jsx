import { FaGraduationCap, FaCertificate } from "react-icons/fa";
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
    <section id="education" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Education & <span className="text-primary">Certification</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and professional training
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Education Timeline */}
          <div>
            {/* Section Subtitle */}
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-3xl text-primary" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Academic Education
              </h3>
            </div>

            {/* Education Cards */}
            <div>
              {educationData
                .filter((item) => item.type === "Degree")
                .map((item) => (
                  <EducationCard key={item.id} item={item} />
                ))}
            </div>
          </div>

          {/* Right Side - Certifications */}
          <div>
            {/* Section Subtitle */}
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-3xl text-primary" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Certifications
              </h3>
            </div>

            {/* Certification Cards */}
            <div>
              {educationData
                .filter((item) => item.type === "Certification")
                .map((item) => (
                  <EducationCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="mt-16 bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🎯 Continuous Learning
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I believe in lifelong learning. Beyond formal education, I
            continuously upgrade my skills through online courses,
            documentation, and hands-on projects. Technology evolves rapidly,
            and I'm committed to staying current with the latest trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
