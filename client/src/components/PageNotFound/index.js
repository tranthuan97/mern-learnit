import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = props => {
  return (
    <div className='text-center'>
      <h1>404 Not Found</h1>
      <p>Sorry! An error has occured. Requested page not found!</p>
    </div>
  );
};

PageNotFound.propTypes = {

};

export default PageNotFound;