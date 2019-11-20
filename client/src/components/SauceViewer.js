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

const SauceViewer = ({ classes, sauce }) => {

  return (
    <div className={classes.container}>
      {
        sauce
          ? (
            <h3>{sauce.name}</h3>
          )
          : (
            <h3>Sauce not found!</h3>
          )

      }
    </div>
  );
};

SauceViewer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(SauceViewer);