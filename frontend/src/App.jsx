import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Divider } from 'antd';
import { Provider } from 'react-redux';

import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './shared/PrivateRoute';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <div className='app__container'>
          <Header />
          <Divider />
          <div className='app__content'>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/' component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
