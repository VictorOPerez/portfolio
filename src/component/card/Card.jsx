import "./card.css";

const Card = ({ emogi, heading, detail }) => {
  return (
    <div className="card">
      <img src={emogi} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
