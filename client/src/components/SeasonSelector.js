import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';



const seasons = [];

for (let i = 1; i <= 9; i += 1) {
  //eslint-disable-next-line
  const sauces = require(`../sauces/season_${i}.json`);
  seasons.push(sauces);
};

const styles = {
  sideBar: {
    width: '250px'
  },
  seasonButton: {
    color: 'yellow',
    outline: '2px solid red',
    minWidth: '100px',
    fontSize: '2em',
    fontFamily: '\'Allerta Stencil\', sans-serif',
    margin: '1em',
    paddiing: '.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      background: 'yellow',
      color: 'black'
    }
  }
};


const SeasonSelector = ({ classes }) => {
  return (
    <div className={classes.sideBar}>
      {
        seasons.map((_, i) => (
          <div key={i} className={classes.seasonButton}>
            Season 
            {' '} 
            {i +1}
          </div>
        ))
      }
    </div>
  );
};

SeasonSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default injectSheet(styles)(SeasonSelector);