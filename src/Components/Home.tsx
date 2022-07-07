import { Feed } from './Feed';
import { PostType } from '../types/PostType';

type Props = {
  posts: PostType[];
  fetchError: string;
  isLoading: boolean;
};

export const Home: React.FC<Props> = ({ posts, fetchError, isLoading }) => {
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts....</p>}
      {!isLoading && fetchError && (
        <p className='statusMsg' style={{ color: 'red' }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className='statusMsg'>No posts to display.</p>
        ))}
    </main>
  );
};
