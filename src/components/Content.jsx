import React from "react";
import List from "./List";

const Content = (prop) => {
  const { title, company, dates, duties } = prop;
  return (
    <div>
      <h1>{title}</h1>
      <h3>{company}</h3>
      <p className="date">{dates}</p>
      {duties.map((e, i) => (
        <List key={i} text={e} />
      ))}
    </div>
  );
};

export default Content;
