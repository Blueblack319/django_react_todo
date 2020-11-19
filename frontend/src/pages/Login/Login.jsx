import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../store/actions/auth';
// import { reduxForm } from 'redux-form';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const Login = (props) => {
  const { isAuthenticated, login } = props;
  const handleOnFinished = (values) => {
    login(values);
  };
  const handleOnFinishFailed = () => {
    // Pop up Modal
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login'>
      <Form
        name='loginForm'
        className='login__form'
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnFinished}
        onFinishFailed={handleOnFinishFailed}>
        <Form.Item
          {...layout}
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          {...layout}
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item {...layout}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href='https://github.com/crazybirdz'>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item {...layout}>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'>
            Log in
          </Button>{' '}
          Or <Link to='/signup'>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
