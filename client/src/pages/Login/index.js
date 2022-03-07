import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Button as RbButton } from 'react-bootstrap'
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginRequest } from 'reducers/authReducer';

const LoginPage = props => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user)

  const onFinish = async (values) => {
    dispatch({type: 'USER_LOGIN_REQUEST', payload: values})
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
          <h1>Learn It</h1>
          <h4>Keep track of what you are learning</h4>
        </div>
        <Form
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

          <Form.Item className='text-center'>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className={`${styles.register} text-center`}>
          {`Don't have an account ?`} <RbButton onClick={() => navigate('/register')} variant="info">Register</RbButton>
        </p>
      </div>
    </div>
  );
};

LoginPage.propTypes = {

};

export default LoginPage;