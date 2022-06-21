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

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<NewPost />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
