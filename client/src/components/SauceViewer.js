/* eslint-disable */
import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import ScovilleMeter from './ScovilleMeter';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    color: 'yellow',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '.5em',
    fontFamily: '\'Allerta Stencil\', sans-serif',
        animation: 'neon-red 1.5s ease-in-out infinite alternate',
  },
  bottle: {
    height: '400px',
  },
  info: {
    textAlign: 'center',
    fontSize: '1.5em',
    fontFamily: '\'Allerta Stencil\', sans-serif',
  },
  containerItem: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  containerItemRight: {
    marginTop: '140px',
    //paddingRight: '90px',
    paddingLeft: '120px',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  unstyledA: {
    color: 'red',
    textDecoration: 'inherit',
  }
};

const SauceViewer = ({ classes, sauce }) => {
  return (
    <div className={classes.container}>
      {
        sauce
          ? (
            <>
              <div className={classes.containerItem}>
                <ScovilleMeter height={'600'} scovilles={sauce.scovilles} />
              </div>
              <div className={classes.containerItemRight}>
                <img className={classes.bottle} src={sauce.img_url} alt={sauce.name}></img>
                <div className={classes.info}>
                  <h3>{sauce.name}</h3>
                  <a className={classes.unstyledA} href={sauce.website} target="_blank" rel="noopener noreferrer">
                    <small>BY: {sauce.maker}</small>
                  </a>
                  <br></br>
                  <small>{sauce.origin}</small>
                </div>
              </div>
            </>
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
  sauce: PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(SauceViewer);