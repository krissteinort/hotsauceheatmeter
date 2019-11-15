import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import Pepper from '../images/pepper.svg';
import fire from '../images/fire.svg';

const levels = [];
//Dynamically sets levels in an array
for (let i = 1; i <= 11; i += 1) {
  //eslint-disable-next-line
  const image = require(`../images/${i.toString().padStart(2, '0')}.svg`);
  levels.push(image);
};

const styles = {
  
  meter: {
    position: 'relative',
    width: '30%'
  },
  level: {
    position: 'absolute',
    width: '100%',
    height: 'auto'
  }
};

//min 450 
//max 2000000

//level 1 0 - 2200
//level 2 2201 - 4000
//level 3 4001 - 9000
//level 4 9001 - 30000
//level 5 30001 - 40000
//level 6 40001 - 71000
//level 7 71001 - 135599
//level 8 135600 - 356999
//level 9 357000 - 625000
//level 10 625001 - 1000000
//level 11 1000000+
const mins = [0, 2201, 4001, 9001, 30001, 40001, 71001, 135600, 357000, 625001, 1000001]

const getLevels = (scovilles) =>  {
  const allLevels = levels.filter((level, i) =>  scovilles >= mins[i]);
  if (scovilles >= 1000000) {
    allLevels.push(fire);
  }
  return allLevels;
};



const ScovilleMeter = ({ classes, scovilles }) => {
    return (
    <div className={classes.meter}>
      <img src={Pepper} alt="pepper-outline" className={classes.level}/>
      {
        getLevels(scovilles).map(level => (
          <img key={level} src ={level} alt="level" className={classes.level} />
        ))
      }
    <h1>Scoville Meter!</h1>
    </div>
  );
};

ScovilleMeter.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  scovilles: PropTypes.number.isRequired
}

export default injectSheet(styles)(ScovilleMeter);