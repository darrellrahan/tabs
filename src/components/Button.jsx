import React from "react";

const Button = (prop) => {
  const { onClick, text, currentTab } = prop;
  return (
    <button
      className={`btn ${currentTab === text && "active-btn"}`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};

export default Button;
