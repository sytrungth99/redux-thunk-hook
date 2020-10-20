import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './redux/actions/postAction';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = useSelector(huhu => huhu.posts.data);
  const request = useSelector(state => state.posts.request);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(loadPosts());
  },[dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        {
          request ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            (data && data.length > 0) ? <div>
              <ul className="list-group">
                {data.map(item =>
                  <li key={item.id} className="list-group-item">{item.name}</li>
                )}
              </ul>
            </div>
              : <div>Data is empty</div>
        }
      </header>
    </div>
  );
}

export default App;
