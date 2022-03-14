import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import Feed from './pages/Feed/index';
import Post from './pages/Post/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
