import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import NoProjectImg from './assets/no-projects.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {};
  return (
    <>
      <main className='h-screen my-8 flex  gap-8'>
        <div className='w-full flex flex-col items-center mt-20'>
          <img
            className='w-16 h-16 object-contain mx-auto'
            src={NoProjectImg}
            alt='image'
          />
          <h1 className='text-3xl font-bold text-stone-600 my-4'>
            No Project Selected
          </h1>
          <p className='text-stone-400 mb-4'>
            Select a project or get started with a new one
          </p>
          <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100'>
            Create new Project
          </button>
        </div>
      </main>
    </>
  );
};

export default Menu;
