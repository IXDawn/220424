import { createContext, useContext, useMemo, useReducer } from 'react'
import { initialState, rootReducer } from '../../reducers/rootReducer'

const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
})

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState, undefined)
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    }
  }, [state, dispatch])
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
export default AppContext
