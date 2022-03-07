import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Button as RbButton } from 'react-bootstrap'
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const RegisterPage = props => {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      await axios.post('http://localhost:5000/api/auth/register', values)
        .then(res => {
          message.success(res.data.message);
        })
    } catch (error) {
      console.log(error.response.data);
      message.error(error.response.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // React.useEffect(() => {
  //   axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjE0OGZiMGRhNzk3MDczNjg0NmZjZWMiLCJpYXQiOjE2NDU3MTM5ODZ9.1vyvAICHM87J7IB17qHSi8083d3mlvi01JkPU9dM_-Y"
  //   axios.get('http://localhost:5000/api/posts').then(res => console.log(res));
  // })

  return (
    <div
      className={`${styles.cover} d-flex justify-content-center align-items-center`}
    >
      <div>
        <div className={styles.header}>
          <h1>Register</h1>
        </div>
        <Form
          style={{ width: 400 }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='Username' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder='Confirm password' />
          </Form.Item>

          <Form.Item className='text-center'>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <p className={`${styles.register} text-center`}>
          {`Have an account ?`} <RbButton onClick={() => navigate('/login')} variant="info">Login</RbButton>
        </p>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {

};

export default RegisterPage;