import React from 'react'
import {CounterConsumerHoc} from "../context/CounterContext";

function Counter({counterContext}) {
    return (
        <div>
            <h3>Counter is: {counterContext.count}</h3>
            <button onClick={() => counterContext.inc()}>Inc</button>
            <button onClick={() => counterContext.dec()}>Dec</button>
        </div>
    )
}

export default CounterConsumerHoc(Counter);
