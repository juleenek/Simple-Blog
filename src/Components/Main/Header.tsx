import { Link } from 'react-router-dom';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1>{title}</h1>
      </Link>
    </header>
  );
};
