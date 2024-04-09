import { useState } from "react";
import "./card.css";

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`card ${active ? "card_shadow_active" : "card_shadow"}`}
      onClick={() => setActive(!active)}
    >
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
