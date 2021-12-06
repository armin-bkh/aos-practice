import AosAnimation from "../Common/AosAnimation/AosAnimation";

const SkillItem = ({ value, title }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3 style={{ marginBottom: "5px" }}>{title}</h3>
      <div className={`skillContainer`}>
        <AosAnimation duration={2000} animation="zoom-in-right" delay={100}>
          <div style={{ width: `${value}%` }} className={`skillValue`}></div>
        </AosAnimation>
      </div>
    </div>
  );
};

export default SkillItem;
