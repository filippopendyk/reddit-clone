import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Error from './pages/Error/Error';
import Post from './pages/PostPage/PostPage';
import Feed from './pages/Feed/Feed';
import SideBar from './components/SideBar/SideBar';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { useAppSelector } from './hooks';
import capitalizeWords from './utils/capitalizeWords';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';


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
          <Route path=':category' element={<Feed/>}/>
          <Route path='post'>
              <Route path=':postId' element={<Post/>}/>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </div>
  );
};

export function WrappedApp(){
  let persistor = persistStore(store);
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}