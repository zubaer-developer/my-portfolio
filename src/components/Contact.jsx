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
    <section
      id="contact"
      className="py-24 bg-base-100 transition-colors duration-300 overflow-hidden relative"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            Get In{" "}
            <span className="text-primary italic underline decoration-secondary/30 underline-offset-8">
              Touch
            </span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-12 h-1.5 bg-primary rounded-full"></div>
            <div className="w-4 h-1.5 bg-secondary rounded-full animate-pulse"></div>
          </div>
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me! I'm usually available for a chat.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Email Card */}
          <div className="group transition-all duration-300 hover:-translate-y-2">
            <ContactCard
              icon={
                <FaEnvelope className="group-hover:scale-110 transition-transform" />
              }
              title="Email"
              value={contactInfo.email}
              link={`mailto:${contactInfo.email}`}
              linkText="Send Email"
            />
          </div>

          {/* Phone Card */}
          <div className="group transition-all duration-300 hover:-translate-y-2">
            <ContactCard
              icon={
                <FaPhone className="group-hover:scale-110 transition-transform" />
              }
              title="Phone"
              value={contactInfo.phone}
              link={`tel:${contactInfo.phone}`}
              linkText="Call Now"
            />
          </div>

          {/* WhatsApp Card */}
          <div className="group transition-all duration-300 hover:-translate-y-2">
            <ContactCard
              icon={
                <FaWhatsapp className="group-hover:scale-110 transition-transform" />
              }
              title="WhatsApp"
              value={contactInfo.phone}
              link={`https://wa.me/${contactInfo.whatsapp}`}
              linkText="Message Me"
            />
          </div>

          {/* Location Card */}
          <div className="group transition-all duration-300 hover:-translate-y-2">
            <ContactCard
              icon={
                <FaMapMarkerAlt className="group-hover:scale-110 transition-transform" />
              }
              title="Location"
              value={contactInfo.location}
              link={
                "https://www.google.com/maps/place/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE/data=!4m2!3m1!1s0x3755b8b087026b81:0x8fa563bbdd5904c2?sa=X&ved=1t:242&ictx=111"
              }
              linkText="BANGLADESH"
            />
          </div>
        </div>

        {/* Connect Section */}
        <div className="relative group overflow-hidden bg-base-200/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-base-content/5 shadow-2xl">
          {/* Decorative Inner Shape */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mt-32 group-hover:bg-primary/20 transition-colors duration-700"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-3xl md:text-5xl font-black text-base-content leading-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Extraordinary!
                </span>
              </h3>
              <p className="text-base-content/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you need a
                robust web application or just a coffee chat, my inbox is always
                open.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                {[
                  {
                    icon: <FaGithub />,
                    link: contactInfo.github,
                    color: "hover:bg-[#24292e]",
                  },
                  {
                    icon: <FaLinkedin />,
                    link: contactInfo.linkedin,
                    color: "hover:bg-[#0077b5]",
                  },
                  {
                    icon: <FaEnvelope />,
                    link: `mailto:${contactInfo.email}`,
                    color: "hover:bg-primary",
                  },
                  {
                    icon: <FaWhatsapp />,
                    link: `https://wa.me/${contactInfo.whatsapp}`,
                    color: "hover:bg-[#25D366]",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-circle btn-outline border-base-content/20 bg-base-100 text-xl transition-all duration-300 hover:text-white hover:border-transparent ${social.color} shadow-lg shadow-black/5`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Quick Contact Info Card */}
            <div className="perspective-1000">
              <div className="card bg-base-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-base-content/5 transform transition-transform duration-500 hover:rotate-y-2">
                <div className="card-body p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-2xl animate-bounce">📬</span>
                    <h4 className="card-title text-base-content font-bold tracking-tight">
                      Quick Contact Details
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {/* Email */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-base-200/50 transition-colors border border-transparent hover:border-base-content/5 group">
                      <div className="bg-primary/10 p-4 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300 shadow-inner">
                        <FaEnvelope className="text-xl" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-[10px] uppercase font-black tracking-widest text-primary/60">
                          Official Email
                        </p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-base-content font-bold hover:text-primary transition-colors truncate block"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-base-200/50 transition-colors border border-transparent hover:border-base-content/5 group">
                      <div className="bg-secondary/10 p-4 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-300 shadow-inner">
                        <FaPhone className="text-xl" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black tracking-widest text-secondary/60">
                          Phone Support
                        </p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-base-content font-bold hover:text-secondary transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-5 p-4 rounded-2xl hover:bg-base-200/50 transition-colors border border-transparent hover:border-base-content/5 group">
                      <div className="bg-success/10 p-4 rounded-xl text-success group-hover:bg-success group-hover:text-success-content transition-all duration-300 shadow-inner">
                        <FaWhatsapp className="text-xl" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black tracking-widest text-success/60">
                          Quick Chat
                        </p>
                        <a
                          href={`https://wa.me/${contactInfo.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base-content font-bold hover:text-success transition-colors"
                        >
                          Available on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 normal-case gap-3 group"
                    >
                      <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                      Start a Conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
