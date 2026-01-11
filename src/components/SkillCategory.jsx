import SkillBar from "./SkillBar";

const SkillCategory = ({ category }) => {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="card-body">
        {/* Category Title */}
        <h3 className="card-title text-xl text-primary mb-2">
          {category.title}
        </h3>

        {/* Category Description */}
        <p className="text-gray-500 text-sm mb-6">{category.description}</p>

        {/* Skills List */}
        <div>
          {category.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;
