import React from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';

const AuthLayout = ({ authRoute }) => {
  let body = '';

  if (authRoute === 'login') {
    body = <LoginPage />
  } else {
    body = <RegisterPage />
  }

  return (
    <div>
      {body}
    </div>
  );
};

AuthLayout.propTypes = {
  authRoute: PropTypes.string.isRequired
};

export default AuthLayout;