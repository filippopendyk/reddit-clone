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
import { selectCategories } from './features/topCategories/topCategoriesSlice';
import capitalizedNavLinks from './components/SideBar/SideBarMockData';
import { useAppSelector } from './hooks';

type TopCategory = {
  topCategory: string;
}

export function App() {

  return (
    <Provider store={store}>
      <div className='app'>
        <SideBar topCategories={capitalizedNavLinks}/>
        <Routes>
          <Route index element={<Feed/>}/>
          <Route path=':category' element={<Feed/>}>
            <Route path='post' element={<Post/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
    </Provider>
  );
};

export function WrappedApp(){
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}