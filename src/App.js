import React from 'react';
import './App.css';
import WorkDiscussion from './components/WorkDiscussion/WorkDiscussion';
import { Route } from 'react-router-dom';
import LoginContainer from './components/Login/LoginContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Chat from './components/Chat/Chat';
import MainPage from './MainPage/MainPage';

function App(props) {
  return (
    <div className="App">
      <div className='app-wrapper'>
        <NavbarContainer />
      </div>
      <div className='app-wrapper-content'>
        <Route exact path="/" render={() => <MainPage />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/work" render={() => <WorkDiscussion />} />
        <Route path="/chat" render={() => <Chat />} />
      </div>
    </div>
  );
}

export default App;
