import { PostType } from '../../Types/PostType';
import { Link } from 'react-router-dom';

type Props = {
  post: PostType;
};

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <article className='post'>
      <Link to={`/post/${post.id}`}>
        <h2 className='linkedTitle'>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
      </Link>
      <p className='postBody'>
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};
