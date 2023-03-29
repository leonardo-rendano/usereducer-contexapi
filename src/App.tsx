import { ChangeEvent, useReducer } from "react";
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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
        <input type="text"  onChange={handleChangeInput}/>
        <h2>{state.text}</h2>
    </div>
  )
}