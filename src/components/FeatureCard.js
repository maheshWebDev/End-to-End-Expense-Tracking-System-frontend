// FeatureCard.js
import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="card ">
      <div className="card-body text-center">
        <div className="icon" style={{ fontSize: "2rem", color: "#007bff" }}>
          {icon}
        </div>
        <h3 className="card-title feature-title">{title}</h3>
        <p className="card-text feature-description">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
