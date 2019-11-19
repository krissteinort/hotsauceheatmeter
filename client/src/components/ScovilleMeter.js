import React, { useState, useEffect } from 'react';
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

  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    height: '400px'
  },
  meter: {
    position: 'relative',
    height: '100%'
  },
  level: {
    position: 'absolute',
    width: 'auto',
    height: '100%'
  },
  blink_me: {
    animation: 'blinker 1.5s ease-in infinite'
  },
  caption: {
    color: '#f22e18',
    textAlign: 'center',
    fontFamily: '\'Allerta Stencil\', sans-serif',
    fontSize: '2em',
    animation: 'neon-red 1.5s ease-in-out infinite alternate',
    margin: '0'

  },
  textYellow: {
    color: 'yellow'
  }

};


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
  if (scovilles >= 1000001) {
    allLevels.push(fire);
  }
  return allLevels;
};


const ScovilleMeter = ({ classes, scovilles, height }) => {
  const allLevels = getLevels(scovilles);
  const [displayedLevels, setDisplayedLevels] = useState([]);
  useEffect(() => {
    if (displayedLevels.length !== allLevels.length) {
      setTimeout(() => {
        const levelsToShow = allLevels.slice(0, displayedLevels.length + 1);
        setDisplayedLevels(levelsToShow)
      }, 200);
    }
  });
  //useEffect(() => {
  //  if (displayedLevels.length === allLevels.length) {
  //    setTimeout(() => {
  //      const levelsToShow = allLevels.slice(0, displayedLevels.length + 1);
  //      setDisplayedLevels(levelsToShow)
  //    }, 200);
  //  }
  //});
//
  return(
    <div 
      className={classes.container} 
      style={{ 
        height: `${height}px`,
        // .58 is calculated width of the levels 
        width: `${0.58 * height}px`
      }}>
      <div className={classes.meter}>
        <img src={Pepper} alt="pepper-outline" className={classes.level}/>
        {
          displayedLevels.map((level, i) => (
            i === 11
            ? (
              <img key={level} src ={level} alt="level" className={`${classes.level} ${classes.blink_me}`} />
            )
            : (
              <img key={level} src ={level} alt="level" className={classes.level} />
            )
          ))
        }
      </div>
      <p className={classes.caption}>
      <span className={classes.textYellow}>Scoville Units</span>
      <br />
        {new Intl.NumberFormat('en-US').format(scovilles)}
      </p>
    </div>
  );
};

ScovilleMeter.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  scovilles: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired
}

export default injectSheet(styles)(ScovilleMeter);