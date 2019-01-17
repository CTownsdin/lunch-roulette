import React from 'react';
import Roulette from './roulette';

class App extends React.Component {
  
  render(){
    const options = [
      "Tavern Hall",
      "Japonessa",
      "Ramen",
      "CoCo",
      'Something Else'
    ];
  
    const handleOnComplete = (value) => {
      console.log(value);
    };  
  
    return (
      <Roulette options={options} baseSize={300} onComplete={handleOnComplete}/>
    );
  }
}

export default App;