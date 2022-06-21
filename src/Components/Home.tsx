import { Feed } from './Feed';
import { PostType } from '../Types/PostType';

type Props = {
  posts: PostType[];
};

export const Home: React.FC<Props> = ({ posts }) => {
  return (
    <main className='Home'>
      {posts.length ? <Feed posts={posts} /> : <p>No posts to display.</p>}
    </main>
  );
};
