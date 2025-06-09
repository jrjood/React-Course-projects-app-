import NewProject from './components/NewProject';
import ProjectSIdebar from './components/ProjectSIdebar';

function App() {
  return (
    <main className='flex h-screen my-8 gap-8'>
      <ProjectSIdebar />
      <NewProject />
    </main>
  );
}

export default App;
