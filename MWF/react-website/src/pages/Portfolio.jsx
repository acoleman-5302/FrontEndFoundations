import React from "react";
import "./Portfolio.css";

const user = "acoleman-5302";
const URL = `https://api.github.com/users/${user}/repos`;
const repoPrefix = "-";
let repos = [];




function Portfolio (){


  fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      console.log(repo.name);
      if (repo.name.indexOf(repoPrefix) > -1) {
        repos.push(repo);
      }
    });
  });
  .

    return(

      <div className="portfolio"> 
        <h1>My Projects</h1><br/>
        <div className="container">
          {repos.map(project => 
            <div className="work" key={project.id}>
              <img src={`https://raw.githubusercontent.com/acoleman-5302/${project.name}/master/images/portfolio.jpeg`}/>
              <div className="layer">
                <h1>{project.name.replace("-","")}</h1>
                <p>{project.description}</p>
                <a target="blank" href={project.html_url}><i className="link">Source Code</i></a>
              </div>
            </div>
            )
          }
        </div>
      </div>
      );
}


export default Portfolio;