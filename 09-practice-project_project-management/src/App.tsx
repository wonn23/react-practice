import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar';
import Create from './pages/Create';
import Detail from './pages/Detail';
import Home from './pages/Home';

export interface IProject {
  title: string;
  description: string;
  dueDate: string;
}

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);
  console.log('projects', projects);
  const handleSave = (data: {
    title: string;
    description: string;
    dueDate: string;
  }) => {
    setProjects((prev) => [...prev, data]);
  };

  return (
    <BrowserRouter>
      <div className='flex h-screen'>
        <SideBar
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          data={projects}
        />
        <main className='flex-1 p-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create onSave={handleSave} />} />
            <Route
              path='/detail/:id'
              element={<Detail title={''} description={''} date={new Date()} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
