import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import ScovilleMeter from './ScovilleMeter';

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
            <div>
              <ScovilleMeter height={600} scovilles={sauce.scovilles}/>
              <div>
                <img src={sauce.img_url} alt={sauce.name}></img>
              </div>
            </div>
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
  sauce:  PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(SauceViewer);