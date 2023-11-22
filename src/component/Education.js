import "../css/Education.css";
import React from "react";
import Card from "./Card";
function Education() {
  const Education=[
    {
      id: 1,
      h: "Primary",
      p:
        "I have completed my primary in two school,first one is government school,belthangady and another one is Shree Ramakunjeshwara sanskrit school,Ramakunja.I passed out my primary in the year 2016.Both school was good I learnt good things.",
      },
    {
      id: 2,
      h: "HighSchool",
      p:
        "I have completed my HighSchool in Shree Ramakunjeshwara English Medium HighSchool,Ramkunja.I joined in the year 2017 and I passed out my highschool in the year 2019.",
      },
    {
      id: 3,
      h: "PUC",
      p:
      "I have completed my PUC in shree Ramakunjeshwara PU College,Ramakunja.I joined in the year 2019 and I passed out my highschool in the year 2021.",
    },
  ];
  return (
    <>
      <div id="education">
        <h2>Education</h2>{" "}
      </div>
      <div className="pd">
        {Education.map((item) => (
          <Card Education={item} />
        ))}</div>
    </>
  );
}
export default Education;
