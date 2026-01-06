import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/pages/Categories/Category';
import Comment from './components/pages/Comments/Comment';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/comments" element={<Comment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
