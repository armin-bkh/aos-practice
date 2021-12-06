import SkillItem from "../SkillItem/SkillItem";

const skills = [
  { title: "HTML", value: 100 },
  { title: "CSS", value: 100 },
  { title: "JavaScript", value: 90 },
  { title: "jQuery", value: 70 },
  { title: "React", value: 90 },
  { title: "Redux", value: 80 },
];

const Skills = () => {
  return (
    <div className={`skillsContainer`}>
      <h1>my skills: </h1>
      <div style={{ marginTop: "20px" }}>
        {skills.map((skill) => (
          <SkillItem title={skill.title} value={skill.value} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
