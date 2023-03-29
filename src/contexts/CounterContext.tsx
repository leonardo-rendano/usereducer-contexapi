import { createContext, ReactNode } from "react";

type ConterContextProviderProps = {
  children: ReactNode
}

type ConterContextProps = {
  
}

export const CounterContext = createContext({} as ConterContextProps)

export const ConterContextProvider = ({ children }: ConterContextProviderProps) => {
  return (
    <CounterContext.Provider value={{}}>
      {children}
    </CounterContext.Provider>
  )
}