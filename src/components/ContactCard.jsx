const ContactCard = ({ icon, title, value, link, linkText }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="card-body items-center text-center">
        {/* Icon */}
        <div className="text-4xl text-primary mb-3">{icon}</div>

        {/* Title */}
        <h3 className="card-title text-lg text-base-content">{title}</h3>

        {/* Value */}
        <p className="text-base-content/60">{value}</p>

        {/* Link Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm mt-3"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
