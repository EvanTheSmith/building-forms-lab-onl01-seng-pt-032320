// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

state = { name: '' }

handleNameChange = (e) => { this.setState({ name: e.target.value }); }

handleOnSubmit = (e) => {
  e.preventDefault();
  let newBand = {name: this.state.name}
  this.props.addBand(newBand);
  this.setState({ name: '' })
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleNameChange} type="text" value={this.state.name} />
        <button type="submit" >Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
