import { Footer } from './components/main/Footer';
import { Header } from './components/main/Header';
import { Nav } from './components/main/Nav';
import { NewPost } from './components/post/NewPost';
import { PostPage } from './components/post/PostPage';
import { About } from './components/About';
import { Home } from './components/Home';
import { Missing } from './components/Missing';
import { EditPost } from './components/post/EditPost';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';
import { useWindowSize } from './hooks/useWindowSize';
import { useAxiosFetch } from './hooks/useAxiosFetch';

import { PostType } from './types/PostType';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();
  const { width } = useWindowSize();

  const { data, fetchError, isLoading } = useAxiosFetch(
    'http://localhost:3500/posts'
  );

  useEffect(() => {
    setPosts(data);
  }, [data]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.log(`Error: ${(error as Error).message}`);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const filteredResults: PostType[] = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    ) as PostType[];
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error: ${(error as Error).message}`);
    }
  };

  const handleEdit = async (id: number) => {
    const datetime = format(new Date(), 'MMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (error) {
      console.log(`Error: ${(error as Error).message}`);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (error) {
      console.log(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <div className='App'>
      <Header title='React JS Blog' width={width} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home 
        posts={searchResults} 
        fetchError={fetchError}
        isLoading = {isLoading}
        />} />
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
          path='/edit/:id'
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              setEditTitle={setEditTitle}
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
