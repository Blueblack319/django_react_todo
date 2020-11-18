import { Switch, Route, Link } from 'react-router-dom';
import { Button, Space, Divider } from 'antd';

import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoListControls'>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign up</Link>
        </div>
        <Space className='app__completeBtns'>
          <Button>Complete</Button>
          <Button>Incomplete</Button>
        </Space>
        <Divider />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
