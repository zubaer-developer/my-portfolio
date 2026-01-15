const SkillBar = ({ skill }) => {
  return (
    <div className="mb-6 group">
      {/* Skill name , percentage */}
      <div className="flex justify-between items-center mb-3">
        {/* Left: Icon , Name */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-base-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl">{skill.icon}</span>
          </div>
          <span className="font-bold text-base-content tracking-wide">
            {skill.name}
          </span>
        </div>

        {/* Right: Percentage */}
        <div className="badge badge-ghost font-mono font-bold">
          {skill.percentage}%
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-base-300 rounded-full h-4 p-[3px] shadow-inner outline outline-1 outline-base-content/5">
        {/* Progress Bar Fill */}
        <div
          className={`h-full rounded-full ${skill.color} relative overflow-hidden transition-all duration-1000 ease-out shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)]`}
          style={{ width: `${skill.percentage}%` }}
        >
          {/* Subtle Glow/Glass Effect */}
          <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
