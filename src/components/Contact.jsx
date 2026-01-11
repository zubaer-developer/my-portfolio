import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ContactCard from "./ContactCard";

const Contact = () => {
  // Contact Information
  const contactInfo = {
    email: "zubaer.developer@gmail.com",
    phone: "+880 1738305766",
    whatsapp: "+8801738305766",
    location: "Dhaka, Bangladesh",
    github: "https://github.com/zubaer-developer",
    linkedin: "https://www.linkedin.com/in/md-zubaer-hossain-137134356/",
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Email Card */}
          <ContactCard
            icon={<FaEnvelope />}
            title="Email"
            value={contactInfo.email}
            link={`mailto:${contactInfo.email}`}
            linkText="Send Email"
          />

          {/* Phone Card */}
          <ContactCard
            icon={<FaPhone />}
            title="Phone"
            value={contactInfo.phone}
            link={`tel:${contactInfo.phone}`}
            linkText="Call Now"
          />

          {/* WhatsApp Card */}
          <ContactCard
            icon={<FaWhatsapp />}
            title="WhatsApp"
            value={contactInfo.phone}
            link={`https://wa.me/${contactInfo.whatsapp}`}
            linkText="Message Me"
          />

          {/* Location Card */}
          <ContactCard
            icon={<FaMapMarkerAlt />}
            title="Location"
            value={contactInfo.location}
            link={null}
            linkText={null}
          />
        </div>

        {/* Connect Section */}
        <div className="bg-base-200 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Let's Work Together!
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you need a
                website, web application, or just want to say hi, feel free to
                connect with me.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary text-xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary text-xl"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn btn-circle btn-outline btn-primary text-xl"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary text-xl"
                  title="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Right Side - Quick Contact Info */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-primary mb-4">
                  📬 Quick Contact
                </h4>

                {/* Email */}
                <div className="flex items-center gap-4 py-3 border-b border-base-200">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-800 hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 py-3 border-b border-base-200">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-gray-800 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 py-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaWhatsapp className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="btn btn-primary w-full mt-4"
                >
                  <FaEnvelope className="mr-2" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
