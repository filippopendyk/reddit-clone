import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Error from './pages/Error';
import Post from './pages/Post';
import Feed from './pages/Feed';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import capitalizedNavLinks from './components/SideBar/SideBarMockData';
import { useAppSelector } from './hooks';



export function App() {

  const topCategories: string[] = useAppSelector((state) => state.topCategories.data);

  return (
      <div className='app'>
        <SideBar topCategories={topCategories}/>
        <Routes>
          <Route index element={<Feed/>}/>
          <Route path=':category' element={<Feed/>}>
            <Route path='post' element={<Post/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
  );
};

export function WrappedApp(){
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  )
}