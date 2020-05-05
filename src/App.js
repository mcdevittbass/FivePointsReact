import React from 'react';
import './App.scss';
import Main from './components/MainComponent.js'
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router basename="/FivePointsReact">
        <Main />
    </Router>
  );
}

export default App;
