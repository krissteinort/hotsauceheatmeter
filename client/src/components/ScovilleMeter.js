import React, { Component } from 'react'
import injectSheet from 'react-jss';

import Pepper from '../images/pepper.svg';
import fire from '../images/fire.svg';

const levels = [];
//Dynamically sets levels in an array
for (let i = 1; i <= 11; i++) {
  const image = require(`../images/${i.toString().padStart(2, '0')}.svg`);
  levels.push(image);
}
levels.push(fire);

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

class ScovilleMeter extends Component {
  render() {
    const { classes } = this.props;
  return (
    <div className={classes.meter}>
      <img src={Pepper} alt="pepper-outline" className={classes.level}/>
      {
        levels.map(level => (
          <img key={level} src ={level} alt="level" className={classes.level} />
        ))
      }
    <h1>Scoville Meter!</h1>
    </div>
  );
  }
}

export default injectSheet(styles)(ScovilleMeter);