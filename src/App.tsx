import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import Error from './pages/Error';
import Post from './pages/Post';
import Feed from './pages/Feed';

function App() {
  return (
    <div className='app'>
      {/* <SideBar/> */}
      <Routes>
        <Route index element={<Feed/>}/>
        <Route path=':category' element={<Feed/>}>
          <Route path='post' element={<Post/>}/>
        </Route>
      </Routes>
    </div>
  );
};

function WrappedApp(){
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}
export default WrappedApp;
