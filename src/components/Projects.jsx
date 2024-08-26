import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import { URL } from "../utils/url";

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    let fetchData = await fetch(
      `${URL}/all-projects`
    );
    let json = await fetchData.json();
    setProjects(json.data[0]);
  }
  return (
    <section className="projects">
      <div className="container">
        <h2>{projects?.title}</h2>
        <p>{projects?.description}</p>
        <div className="projects__wrapper">
          {projects?.project_ref_id.map((item) => {
            return (
              <div className="projetcs__card" key={item._id}>
                <img width={250} src={item?.imageLink} alt="" />
              </div>
            );
          })}
        </div>
        <div className="projects_btn">
        <button className="button">All projects</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
