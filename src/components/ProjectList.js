import React from 'react';
import ProjectItem from './ProjectItem'; // Import your ProjectItem component

function ProjectList({ projects }) {
  return (
    <div className='container'>
      <div className='row'>
      {projects.map(project => (
        <ProjectItem
          key={project.about} // Use the project id as the key prop
          name={project.name}
          about={project.about}
          technologies={project.technologies}
          
        />
      ))}
      </div>
    </div>
  );
}

export default ProjectList;





























//     <div id="projects">
//       <h2>My Projects</h2>
//       <div id="project-list" className='container'>
//         <div className='row'>
//           {/* <div className='com-md-4'>  {props.projects[0]}</div> */}
           

         

//           {/* <div className='com-md-4'>  {props.projects}</div> */}
            

         

//           {/* <div className='com-md-4'>  {props.projects}</div> */}

            

          

