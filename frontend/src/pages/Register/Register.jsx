import React from 'react';
import { Form, Input, Button, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../store/actions/auth';

const Register = ({ isAuthenticated, register }) => {
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  const handleOnFinished = (values) => {
    register(values);
  };

  const handleOnFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo);
  };

  const tailLayout = {
    wrapperCol: {
      offset: 10,
    },
  };

  return (
    <div className='register'>
      <Form
        layout='vertical'
        name='register'
        onFinish={handleOnFinished}
        onFinishFailed={handleOnFinishFailed}
        scrollToFirstError>
        <Space>
          <Form.Item
            label='First Name'
            name='first_name'
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label='Last Name'
            name='last_name'
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}>
            <Input />
          </Form.Item>
        </Space>
        <Form.Item
          label='E-mail'
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label={
            <span>
              Username&nbsp;
              <Tooltip title='What do you want others to call you?'>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Confirm Password'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  'The two passwords that you entered do not match!',
                );
              },
            }),
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
