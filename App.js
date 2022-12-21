import './styles.css';
import React, { useState } from 'react';

const App = () => {
  const h2Style = {
    color: 'blue',
    fontSize: '30px',
  };

  const [greeting, setGreeting] = useState('Hello World!');

  return (
    <div className="app">
      <div className="card">
        <h1 style={{ color: 'green', fontSize: '50px' }}>{greeting}</h1>
        <h2 style={h2Style}>Let's make some noise</h2>
        <button
          className="button"
          onClick={() =>
            setGreeting(
              greeting === 'Hello World!' ? 'Hello React!' : 'Hello World!'
            )
          }
        >
          Change Greeting
        </button>
      </div>
    </div>
  );
};

export default App;
