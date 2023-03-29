import { ActionType, REDUCER_ACTION_TYPE, StateType } from "./types"

export const initialValue = {
  counter: 0
}

export function CounterReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    default: throw new Error()
  }
}