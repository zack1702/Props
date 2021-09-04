import React from 'react';
import './App.css';
import Container from './componnent/Container';

const user = {
  fullname : 'ELBAYED Zakaria',
  biographie : 'lorem ',
  profession : 'Web Developper'
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container mydata={user}/>
      </div>
    )
  }
}

export default App;