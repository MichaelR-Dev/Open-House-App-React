import React from 'react';
import { Header } from './components/feed/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Feed } from './pages/Feed';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import Explore from './pages/Explore';
import Compass from './pages/Compass';
import Favorites from './pages/Favorites';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import { SideNav } from './components/feed/Column';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Router>
        <Routes>
          <Route path={`/u/${'density'}`} element={<ProfilePage/>}/>
          <Route path={'/feed' || '/'} element={<Feed/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/compass' element={<Compass/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
