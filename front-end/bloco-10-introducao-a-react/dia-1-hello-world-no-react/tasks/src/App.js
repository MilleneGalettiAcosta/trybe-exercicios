import React from 'react';
import './App.css';

const Task = (value) => {
  return(
    <li key={value}>{value}</li>
  );
}

const tasks = ['html', 'css', 'javascript', 'react'];

class App extends React.Component {
  render() {
    return (
    <ul>{tasks.map(tasks => Task(tasks))}</ul>
    );
  }
}


export default App;
