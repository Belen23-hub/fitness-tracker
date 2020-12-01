import React from 'react';
import Activities from './Activities';
import '../index.css';
import MyActivities from './MyActivities';

const App = () => {
    return (
        <div>
          <h1>Welcome tu your Fitness tracker App!</h1>
          <Activities />  
          <MyActivities />
        </div>
    )
}

export default App
