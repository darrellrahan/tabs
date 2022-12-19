import React, { useEffect, useState } from "react";
import Button from "./Button";
import Content from "./Content";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState("TOMMY");

  const tab = data.filter((e) => e.company === currentTab);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container">
        {isLoading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="title">
            <h1>Experience</h1>
            <hr />
          </div>
        )}
        <div className="body-wrap">
          <div className="btn-wrap">
            {data.map((e, i) => {
              const { company } = e;
              return (
                <Button
                  key={i}
                  text={company}
                  onClick={(company) => setCurrentTab(company)}
                  currentTab={currentTab}
                />
              );
            })}
          </div>
          <div className="content-wrap">
            {tab.map((e, i) => {
              const { title, dates, duties, company } = e;
              return (
                <Content
                  key={i}
                  title={title}
                  dates={dates}
                  duties={duties}
                  company={company}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
