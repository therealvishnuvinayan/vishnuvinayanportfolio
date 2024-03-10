const Skill = ({ skill }) => {
  return (
    <div
      key={skill.id}
      className="flex flex-col items-center justify-center border border-solid border-primary border-opacity-30 md:p-6 p-3 rounded-md transition-all duration-500 group hover:bg-gray-100 dark:hover:bg-dark hover:scale-105"
    >
      <skill.icon
        style={{
          color: `${skill.color === "#ffffff" ? "#00a78e" : skill.color}`,
        }}
        className={`text-5xl`}
      />
      <h3 className="text-lg">{skill.name}</h3>
    </div>
  );
};

export default Skill;
