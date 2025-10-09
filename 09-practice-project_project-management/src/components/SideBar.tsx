import {PropsWithChildren} from 'react';
import {useNavigate} from 'react-router-dom';
import {IProject} from '../App';

interface ISideBarProps {
  open: boolean;
  onToggle: () => void;
  data: IProject[];
}

const SideBar = ({open, onToggle, data}: PropsWithChildren<ISideBarProps>) => {
  const navigate = useNavigate();

  const handleAddProject = () => {
    navigate('/create');
  };

  const handleUpdateProject = (project: IProject) => {
    navigate(`/detail/${project.title}`);
  };

  const handleToggle = () => {};
  return (
    <>
      <div
        className={`sidebar ${
          open ? 'open' : ''
        } bg-black w-1/4 h-full text-white items-center flex flex-col gap-4 py-10`}
      >
        <button onClick={onToggle}>열었다닫았다</button>
        <h1>Your Project</h1>
        <button
          onClick={handleAddProject}
          className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100'
        >
          + Add Project
        </button>
        <div>
          {data &&
            data.map((item: IProject) => {
              return (
                <ul
                  key={item.title}
                  className='cursor-pointer'
                  onClick={() => handleUpdateProject(item)}
                >
                  {item.title}
                </ul>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
