import { Post } from './Post/Post';
import { PostType } from '../Types/PostType';

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
