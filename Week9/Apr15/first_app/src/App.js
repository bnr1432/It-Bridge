import React, { useState } from 'react';

function App() {
  const [showMsg, setShowMsg] = useState(false);

  return (
    
    <div className="app">
      <header>
        <h1>Welcome to My React UI</h1>
      </header>
      <main>
        <p>Hello, Nagarjuna Reddy 👋</p>
        <button onClick={() => setShowMsg(!showMsg)}>
          {showMsg ? 'Hide' : 'Show'} Message
        </button>
        {showMsg && <p className="message">This is a toggled message!</p>}
      </main>
    </div>
  );
}

export default App;
