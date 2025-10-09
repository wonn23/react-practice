import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {IProject} from '../App';

interface ICreateProps {
  onSave: (data: IProject) => void;
}

const Create = ({onSave}: ICreateProps) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState('');

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = () => {
    onSave({
      title,
      description,
      dueDate,
    });
    navigate('/');
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-4 justify-end items-center w-full mb-4'>
        <button
          onClick={handleCancel}
          className='text-stone-800 hover:text-stone-950'
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
        >
          Save
        </button>
      </div>
      <form
        className='flex flex-col gap-4'
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className='flex flex-col'>
          <label className='text-sm font-bold uppercase text-stone-500'>
            TITLE
          </label>
          <input
            className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-bold uppercase text-stone-500'>
            DESCRIPTION
          </label>
          <textarea
            className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-sm font-bold uppercase text-stone-500'>
            DUE DATE
          </label>
          <input
            type='date'
            className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
