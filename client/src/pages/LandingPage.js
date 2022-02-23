import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LandingPage = props => {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  })
  return null;
};

LandingPage.propTypes = {

};

export default LandingPage;