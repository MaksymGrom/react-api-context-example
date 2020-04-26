import React, {useState} from "react";

const CounterContext = React.createContext(1);

const CounterConsumer = CounterContext.Consumer;

export const CounterProvider = ({value, children}) => {
    const [count, setCount] = useState(value);
    return (
        <CounterContext.Provider value={{
            count,
            inc: () => setCount(count + 1),
            dec: () => setCount(count - 1),
        }}>
            {children}
        </CounterContext.Provider>
    )
}

export const CounterConsumerHoc = WrappedComponent => props => (
    <CounterConsumer>
        {(context) => {
            return <WrappedComponent {...props} counterContext={context} />
        }}
    </CounterConsumer>
)
