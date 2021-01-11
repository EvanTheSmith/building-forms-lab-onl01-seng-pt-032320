import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}</ul>
      </div>
    )
  }
}

// export default BandsContainer

// const mapStateToProps = state => state;
const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = dispatch => ({
  addBand: (band) => dispatch({type: 'ADD_BAND', band})
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);