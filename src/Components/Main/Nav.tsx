import { Link } from 'react-router-dom';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Nav: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
        <input
          id='search'
          type='text'
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
