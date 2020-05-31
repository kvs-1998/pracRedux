import React from 'react';
// Provider is the glue for react and redux
import {Provider} from 'react-redux';
import Post from './components/Post';
import PostForm from './components/PostForm';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
