import React from 'react';
import { Space, Button, Typography } from 'antd';
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
            <Button type='link' onClick={logout}>
              Logout
            </Button>
          ) : (
            <>
              <Button type='link' to='/login'>
                Login
              </Button>
              <Button type='link' to='/register'>
                Sign up
              </Button>
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
