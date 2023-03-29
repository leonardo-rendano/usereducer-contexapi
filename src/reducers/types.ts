export enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT
}

export type ActionType = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
}

export type StateType = {
  counter: number,
  text: string
}