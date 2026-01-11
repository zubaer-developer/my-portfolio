const SkillBar = ({ skill }) => {
  return (
    <div className="mb-6">
      {/* Skill name , percentage */}
      <div className="flex justify-between items-center mb-2">
        {/* Left: Icon , Name */}
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-700">{skill.icon}</span>
          <span className="font-medium text-gray-800">{skill.name}</span>
        </div>

        {/* Right: Percentage */}
        <span className="text-gray-600 font-semibold">{skill.percentage}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        {/* Progress Bar Fill */}
        <div
          className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
