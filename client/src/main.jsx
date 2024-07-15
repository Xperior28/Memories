import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './reducers/posts'

const store = configureStore({
  reducer: {
    posts: postsReducer,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
        <App />
    </Provider>
  
)
