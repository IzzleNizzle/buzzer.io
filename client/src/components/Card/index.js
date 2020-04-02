import React from "react";

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
