import React from 'react';
import './App.css';
import CalcButton from './CalcButton'
import buttonType from './buttonType'

class App extends React.Component{
  constructor() {
      super()
      this.state = {
        storedValue: 0,
        currentValue: 0,
        buttonComponents: buttonType,
        field: ""
      }
      this.updateCurrentNumber = this.updateCurrentNumber.bind(this)
      this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  updateCurrentNumber(event){
    this.setState({
      currentValue: event.target.value
    });
  }

  handleButtonClick(event){
      this.setState({
        storedValue: this.currentValue,
        currentValue: 0
      }) 
  }

  render(){
    const buttonComponents = this.state.buttonComponents.map(mathType => <CalcButton key={mathType.id} calcButton={mathType}/>)
    return (
      <div>
        <p>Stored Number:{this.state.storedValue}</p>
        <p>Current Number:{this.state.currentValue}</p>
        <input type="text" name="enterValue" onChange={this.updateCurrentNumber}/>
        <p>{buttonComponents}</p>
      </div>
    )
  }
}

export default App;
