type Props = {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  postTitle: string;
  postBody: string;
  setPostTitle: React.Dispatch<React.SetStateAction<string>>;
  setPostBody: React.Dispatch<React.SetStateAction<string>>;
};

export const NewPost: React.FC<Props> = ({
  handleSubmit,
  postTitle,
  postBody,
  setPostTitle,
  setPostBody,
}) => {
  return (
    <main className='NewPost'>
      <h1>New Post</h1>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className='submitButton' type='submit'>
          Submit
        </button>
      </form>
    </main>
  );
};
