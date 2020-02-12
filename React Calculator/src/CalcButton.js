import React from "react"

class CalcButton extends React.Component{
    render(){
        return (
            <button key={this.props.calcButton.id} onClick={this.props.handleButtonClick}>{this.props.calcButton.symbol}</button>
        )
    }
}

export default CalcButton