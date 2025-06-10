import ProjectSIdebar from './components/ProjectSIdebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function closeProjects() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  let content;

  if (projectState.selectedProjectID === null) {
    content = <NewProject onClose={closeProjects} onAdd={handleAddProject} />;
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='flex h-screen my-8 gap-8'>
      <ProjectSIdebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
