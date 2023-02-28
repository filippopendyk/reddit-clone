import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Error from './pages/Error';
import Post from './pages/Post';
import Feed from './pages/Feed';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { useAppSelector } from './hooks';
import capitalizeWords from './utils/capitalizeWords';


export function App() {

  // Loads the data for sidebar from topCategories slice.

  const topCategories: string[] = capitalizeWords(useAppSelector((state) => state.topCategories.data));
  const isLoading: boolean = useAppSelector((state) => state.topCategories.isLoading);
  const error: string | null = useAppSelector((state) => state.topCategories.error);

  return (
      <div className='app'>
        <SideBar topCategories={topCategories} isLoading={isLoading} error={error}/>
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