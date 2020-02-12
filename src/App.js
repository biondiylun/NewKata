import React from 'react';
import './App.css';
import CalcButton from './CalcButton'
import buttonType from './buttonType'

class App extends React.Component{
  constructor() {
      super()
      this.state = {}
  }

  render(){
    const buttonComponents = buttonType.map(mathType => <CalcButton key={mathType.id} calcButton={mathType}/>)
    const currentValue = 0;
    const adjacentValue = 0;
    return (
      <div>
        <p>{currentValue}</p>
        <input type="text" name="enterValue"></input>
        <p>{buttonComponents}</p>
      </div>
    )
  }
}

export default App;
