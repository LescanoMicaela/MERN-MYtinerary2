import React from 'react';
import Router from './Router';


class App extends React.Component {
  render() {
    return (
      <div className="app">
      {/* I just import component router to the APP component, 
       since it will be the one that render the page according the path */}
       <Router />
      </div>
    );
  }
}

export default App;


