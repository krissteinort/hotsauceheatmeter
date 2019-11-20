import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const styles = {
  container: {
    width: '100%',
    height: '100%',    
    display: 'flex',
    flexDirection: 'column',
    color: 'yellow',
  },

};

const SauceViewer = ({ classes, match }) => {
  const { sauce_id } = match.params;
  console.log('sauce_id,', sauce_id);
  
  return (
    <div className={classes.container}>
      <h3>You selected a sauce!</h3>
    </div>
  );
};

SauceViewer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(injectSheet(styles)(SauceViewer));