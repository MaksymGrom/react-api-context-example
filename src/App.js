import React from 'react';
import './App.css';
import {CounterProvider} from "./context/CounterContext";
import Counter from "./components/Counter";

function App() {
  return (
      <div>
        <CounterProvider value={0}>
          <Counter />
          <Counter />
        </CounterProvider>

        <CounterProvider value={5}>
          <Counter />
          <Counter />
        </CounterProvider>
      </div>
  );
}

export default App;
