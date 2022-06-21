import { useParams, Link } from 'react-router-dom';
import { PostType } from '../../Types/PostType';

type Props = {
  posts: PostType[];
  handleDelete(id: number): void;
};

export const PostPage: React.FC<Props> = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p className='visitHome'>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};
