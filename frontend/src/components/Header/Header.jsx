import React from 'react';
import { Space, Button, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

import './Header.scss';

const { Title } = Typography;

const Header = ({ isAuthenticated, logout }) => {
  return (
    <div className='header'>
      <div className='header__top'>
        <Title level={3}>Todo CRUD</Title>
        <div className='header__links'>
          {isAuthenticated ? (
            <Link onClick={logout}>Logout</Link>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Sign up</Link>
            </>
          )}
        </div>
      </div>
      <Space className='header__completeBtns'>
        <Button>Complete</Button>
        <Button>Incomplete</Button>
      </Space>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
