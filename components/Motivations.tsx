import React from "react";

interface MotivationsProps {
  data: {
    title: string;
    items: string[];
  };
}

const Motivations: React.FC<MotivationsProps> = ({ data }) => {
  return (
    <div className="header-media">
      <div className="right-side">
        <h2>{data.title}</h2>
        <ul>
          {data.items.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Motivations;
