const EducationCard = ({ item }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0">
      <div className="absolute -left-2.25 top-0 w-4 h-4 bg-primary rounded-full"></div>

      {/* Card */}
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 ml-4">
        <div className="card-body">
          {/* Year Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-primary">{item.year}</span>
            {/* Type badge - Education or Certification */}
            <span className="badge badge-outline badge-secondary">
              {item.type}
            </span>
          </div>

          {/* Title/Degree */}
          <h3 className="card-title text-lg text-gray-800">{item.title}</h3>

          {/* Institution */}
          <p className="text-primary font-medium">{item.institution}</p>

          {/* Subject/Description */}
          {item.subject && (
            <p className="text-gray-600 text-sm">📚 {item.subject}</p>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-gray-500 text-sm mt-2">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
