import React from 'react';
import * as firebase from 'firebase/app'

function App() {

  console.log(firebase.database())
  return (
    <div className="main">
      <h1>Track Your Order</h1>
      <h1>Track Your Order</h1>
      <h1>Track Your Order</h1>
      <h1>Track Your Order</h1>
      <form className = 'order-form'>
        <input type='text' placeholder = 'tracking number'></input>
        <button>Check</button>
      </form>
    </div>
  );
}

export default App;
