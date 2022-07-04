import { PostType } from '../../Types/PostType';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

type Props = {
  posts: PostType[];
  editBody: string;
  editTitle: string;
  setEditTitle: React.Dispatch<React.SetStateAction<string>>;
  setEditBody: React.Dispatch<React.SetStateAction<string>>;
  handleEdit(id: number): void;
};

export const EditPost: React.FC<Props> = ({
  posts,
  editBody,
  editTitle,
  setEditTitle,
  setEditBody,
  handleEdit,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);
  return (
    <main className='NewPost'>
      {editTitle && (
        <>
          <h1>Edit Post</h1>
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle'>Title:</label>
            <input
              id='postTitle'
              type='text'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post:</label>
            <textarea
              id='postBody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              className='submitButton'
              type='submit'
              onClick={() => handleEdit(post.id)}
            >
              Submit
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p className='visitHome'>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};
