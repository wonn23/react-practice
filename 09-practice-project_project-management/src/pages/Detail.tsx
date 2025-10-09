import {useParams} from 'react-router-dom';

export interface IDetailProps {
  title: string;
  description: string;
  date: Date;
}
const Detail = ({title, description, date}: IDetailProps) => {
  const id = useParams();
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <h2>{title}</h2>
          <button>Delete</button>
        </div>
        <p>{date.toISOString()}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>Tasks</p>
        <button>Add Task</button>
      </div>
    </>
  );
};

export default Detail;
