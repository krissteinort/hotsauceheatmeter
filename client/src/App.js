import React from 'react';
import ScovilleMeter from './components/ScovilleMeter';
import SeasonSelector from './components/SeasonSelector';
import { Switch, Route } from 'react-router-dom';
import SeasonViewer from './components/SeasonViewer';

function App() {
  return (
    <div 
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <SeasonSelector />
      <Switch>
          <Route path="/seasons/:season" component={SeasonViewer} />
        </Switch>
    </div>
  );
 // <ScovilleMeter scovilles={1000003} height={600}/>
}

export default App;
