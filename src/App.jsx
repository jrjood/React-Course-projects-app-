import { useState } from 'react';

import ProjectSIdebar from './components/ProjectSIdebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectID,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  }

  let content = (
    <ProjectDetails
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={projectState.projects.find(
        (proj) => proj.id === projectState.selectedProjectID
      )}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectID === null) {
    content = (
      <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
    );
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='flex h-screen my-8 gap-8'>
      <ProjectSIdebar
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelect={handleSelectProject}
        selectedProjectID={projectState.selectedProjectID}
      />
      {content}
    </main>
  );
}

export default App;
