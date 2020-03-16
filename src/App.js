import React, { Component } from 'react';
import * as firebase from 'firebase/app'

class App extends Component {

  state = {
    trackingValue: ''
  }

  onChangeTrackingVal = e => {

    this.setState({
      trackingValue: e.target.value
    })
    console.log(this.state.trackingValue)
  }

  submitTracking = (e) => {
   e.preventDefault()

   this.setState({
     trackingValue: ''
   })
  }
  render() {


    return (
      <div className="main">
        <h1>Track Your Order</h1>
        <form className='order-form'>
          <input type='text' placeholder='tracking number'
            value={this.state.trackingValue}
            onChange={e => this.onChangeTrackingVal(e)}>

          </input>
          <button className='submit-btn' onClick={this.submitTracking}>Check</button>
        </form>
      </div>
    );
  }
}

export default App;
