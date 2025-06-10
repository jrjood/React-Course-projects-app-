import Button from './Button';

const ProjectSIdebar = ({ onStartAddProject, projects }) => {
  return (
    <aside className=' w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ add project</Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li>
            <li key={project.id}>
              <button>{project.title}</button>
            </li>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default ProjectSIdebar;
