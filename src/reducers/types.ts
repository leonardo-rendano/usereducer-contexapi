export enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT
}

export type ActionType = {
  type: REDUCER_ACTION_TYPE
}

export type StateType = {
  counter: number
}