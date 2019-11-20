import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';

import SauceViewer from './SauceViewer';

const styles = {
  container: {
    width: '100%',
    height: '100%',    
    display: 'flex',
    flexDirection: 'column',
    color: 'yellow',
  },
  selectedSauce: {
    height: '70%',
    width: '100%',
  },
  bottles: {
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      height: '200px',
      cursor: 'pointer',
    }
  }
};

const SeasonViewer = ({ classes, match, history }) => {
  const { season } = match.params;
  const [sauces, setSauces] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
      const sauces = require(`../sauces/season_${season}.json`);
      setSauces(sauces);
    }
  , [season]);
  return (
    <div className={classes.container}>
      <div className={classes.selectedSauce}>
        <Switch> 
          <Route 
            exact 
            path={`/seasons/${season}/sauces/:sauce_id`} 
            component={SauceViewer}
          />
        </Switch>
      </div>
      <div className={classes.bottles}>
        {
          sauces.map(sauce => (
          <img 
            key={sauce.id} 
            src={sauce.img_url} 
            alt={sauce.name}
            onClick={() => history.push(`/seasons/${season}/sauces/${sauce.id}`)} 
          />
          ))
        }
      </div>
    </div>
  );
};

SeasonViewer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(injectSheet(styles)(SeasonViewer));