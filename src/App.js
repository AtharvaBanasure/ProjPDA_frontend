import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Resources from './pages/Resources';
import PastEvents from './pages/PastEvents'
import Layout from './Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'
// import UpcomingEvents from './components/Upcomingevents';


const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Layout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/events" element={<PastEvents />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />


          </Route>
        </Routes>
      </Router>

    </UserContextProvider>


  );
};

export default App;

