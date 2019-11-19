import React, { useState, useEffect } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const styles = {
  container: {
    color: 'yellow',
  }
};

const SeasonViewer = ({ classes, match }) => {
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
      <div></div>
      <div>
        {
          sauces.map(sauce => <p>{sauce.name}</p>)
        }
      </div>
    </div>
  );
};

SeasonViewer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};

export default withRouter(injectSheet(styles)(SeasonViewer));