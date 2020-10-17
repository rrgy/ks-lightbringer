import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='background'>
        <div className='content'>
          <div className='player'>
            Player
          </div>
          <div className='routes'>
            {routes}
          </div>
          <div className='social_media'>
            Discord and Raider.io
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
