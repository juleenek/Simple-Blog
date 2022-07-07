import { Post } from './post/Post';
import { PostType } from '../types/PostType';

type Props = {
  posts: PostType[];
};

export const Feed: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
