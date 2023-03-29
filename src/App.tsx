import { useReducer } from "react";
import { CounterReducer, initialValue } from "./reducers/CounterReducer";
import { REDUCER_ACTION_TYPE } from "./reducers/types";

export default function App() {
  const [state, dispatch] = useReducer(CounterReducer, initialValue)

  const handleIncrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
  }

  const handleDecrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}