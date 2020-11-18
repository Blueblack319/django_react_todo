import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Login.scss';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Login = () => {
  const handleOnFinished = () => {
    // Pop up Modal
  };
  const handleOnFinishFailed = () => {
    // Pop up Modal
  };

  return (
    <div className='login'>
      <Form
        name='login'
        className='login__form'
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnFinished}>
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
        <div className='form__footer'>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a
              className='login-form-forgot'
              href='https://github.com/crazybirdz'>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'>
              Log in
            </Button>{' '}
            Or <Link to='/signup'>register now!</Link>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;
