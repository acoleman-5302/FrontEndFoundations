import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      <div className="card">
        <div className="card-header">
          Professional
        </div>
        <div className="card-body">

          <div>
            <h5 className="card-title">Education</h5>
            <ul className="card-text">
                <li>In progress - Bachelors of Science in Pure Mathematics</li>
                <li>In progress- certificate for Front End Development</li>
            </ul>
          </div>

          <div>
            <h5 className="card-title skills">Skills</h5>
            <ul className="card-text">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
          </div>

          <div>
            <h5 className="card-title experience">Experience</h5>
            <ul className="card-text">
                <li>Projected -Moravian University REU 2023</li>
                <li>Lead Tutor for Academic Center of Enrichment</li>
                <li>Teaching Assistant to the Math Department</li>
            </ul>
          </div>

          <a href="" className="btn btn-secondary">See my resume</a>
        </div>
      </div>




      <div className="card">
        <div className="card-header">
          Personal
        </div>
        <div className="card-body">

          <div>
            <h5 className="card-title">Background</h5>
            <ul className="card-text">
              <li>Grew up in Haiti, la dad ada Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, explicabo culpa dolor et exercitationem possimus nam blanditiis. Recusandae rem veritatis quas qui facilis ducimus veniam magnam, quasi culpa corrupti expedita.</li>
            </ul>
          </div>

          <div>
            <h5 className="card-title">Hobbies</h5>
            <ul className="card-text">
              <li>Reading</li>
              <li>Hiking</li>
              <li>Something Else</li>
            </ul>
          </div>

          <a target="blank" href="https://lucielleanna02.wixsite.com/annalucielle/blogs" className="btn btn-primary">See my blog</a>
        </div>
      </div>

  <h1>Education</h1>
      <ul>
          <li>In progress - Bachelors of Science in Pure Mathematics</li>
          <li>In progress- certificate for Front End Development</li>
        </ul>
      <h1>Skills</h1>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      <h1>Experience</h1>
      <ul>
          <li>Projected -Moravian University REU 2023</li>
          <li>Lead Tutor for Academic Center of Enrichment</li>
          <li>Teaching Assistant to the Math Department</li>
        </ul>
      <h1>Background</h1>
      <ul>
          <li>Grew up in Haiti, la dad ada Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, explicabo culpa dolor et exercitationem possimus nam blanditiis. Recusandae rem veritatis quas qui facilis ducimus veniam magnam, quasi culpa corrupti expedita.</li>
        </ul>
      <h1>Hobbies</h1>
        <ul>
          <li>Reading</li>
          <li>Hiking</li>
          <li>Something Else</li>
        </ul>
    <a href="https://lucielleanna02.wixsite.com/annalucielle/blogs"><button className="btn btn-secondary">See my Blog</button></a>
    </div>
  )
};

export default About;