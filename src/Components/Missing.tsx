import { Link } from 'react-router-dom';

type Props = {};

export const Missing: React.FC<Props> = () => {
  return (
    <main className='Missing'>
      <h2>Post Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p className='visitHome'>
        <Link to='/'>Visit Our Homepage</Link>
      </p>
    </main>
  );
};
