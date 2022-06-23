import { Footer } from './Components/Main/Footer';
import { Header } from './Components/Main/Header';
import { Nav } from './Components/Main/Nav';
import { NewPost } from './Components/Post/NewPost';
import { PostPage } from './Components/Post/PostPage';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Missing } from './Components/Missing';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { PostType } from './Types/PostType';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults: PostType[] = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    ) as PostType[];
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  };

  const handleDelete = (id: number) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate('/');
  };

  return (
    <div className='App'>
      <Header title='React JS Blog' />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />} />
        <Route
          path='/post'
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postBody={postBody}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path='/post/:id'
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
