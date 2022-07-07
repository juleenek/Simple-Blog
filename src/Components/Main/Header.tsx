import { Link } from 'react-router-dom';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';

type Props = {
  title: string;
  width: number;
};

export const Header: React.FC<Props> = ({ title, width }) => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1>{title}</h1>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
      </Link>
    </header>
  );
};
