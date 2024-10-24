import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/redux_store';



const root = ReactDOM.createRoot(document.getElementById('root'));
const renderTree = () => {
  root.render(
    <React.Fragment>
      <BrowserRouter>
      <Provider store={store}>
        <App playlists={store.getState().playlists}/>
      </Provider>
      </ BrowserRouter>
    </React.Fragment>
  );
};

renderTree(store.getState());
store.subscribe(renderTree);
