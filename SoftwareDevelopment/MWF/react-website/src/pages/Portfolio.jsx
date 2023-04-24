import React from "react";
import Port from "../images/celeste.jpeg";
import "./Portfolio.css";

const user = "acoleman-5302";
const URL = `https://api.github.com/users/${user}/repos`;
const repoPrefix = "-";
let repos = [];

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((repo) => {
      console.log(repo.name);
      if (repo.name.indexOf(repoPrefix) > -1) {
        repos.push(repo);
      }
    });
    // console.log(repos[0])
  });


// function getProjects() {
//     fetch("https://api.github.com/users/acoleman-5302/repos")
//         .then((response) => response.json())
//         .then(console.log(response))
//         .catch((error) => {
//             console.warn("Error loading navbar:", error);
//   }

//   getProjects();

function images (){
  repos.forEach((repo) => {
    const image = `https://raw.githubusercontent.com/acoleman-5302/${repo.name}/main/portfolio.jpeg`
    console.log(image);
    })
}

function Portfolio() {

        images();
  return (
    
    <div className="main">
      <header>
        <div id="navbar-container"></div>
      </header>

      <section>
          <div className="container">
              <h1 className="sub-title">My Projects</h1>
              <div className="">
                  <div className="image">
                      <img src= "" />
                      <div className="">
                          <h3>Project</h3>
                          <p>description</p>
                          <a href=""><i className="">link</i></a>
                      </div>  
                  </div>
                  <div className="">
                      <img src="/images/website.jpeg" />
                      <div className="">
                          <h3>First Website</h3>
                          <p>description</p>
                          <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
                      </div>
                  </div>
                  <div className="">
                      <img src="" />
                      <div className="">
                          <h3>Project</h3>
                          <p>description</p>
                          <a href=""><i className="fa-solid fa-up-right-from-square"></i></a>
                      </div>
                  </div>
              </div>
              <div id="repo-list">
                  <h2>Other Repository  <i className="fa-sharp fa-solid fa-link"></i>'s</h2>
                  <ul></ul>
              </div>
  

          <div className="row portfolio">

          </div>

          </div>
      </section> 

    </div>
  )
}

export default Portfolio;