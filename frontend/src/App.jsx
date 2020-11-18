import { Switch, Route, Link } from 'react-router-dom';
import { Button, Space, Divider } from 'antd';
import { Provider } from 'react-redux';

import './App.scss';
import store from './store';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <div className='app__container'>
          <div className='app__todoListControls'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Sign up</Link>
          </div>
          <Space className='app__completeBtns'>
            <Button>Complete</Button>
            <Button>Incomplete</Button>
          </Space>
          <Divider />
          <div className='app__content'>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
