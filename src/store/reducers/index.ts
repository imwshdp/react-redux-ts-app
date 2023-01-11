import { todoReducer } from './todoReducer';
import { userReducer } from './uderReducer';
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
})

// GET AND EXPORT REDUCER TYPE
export type RootState = ReturnType<typeof rootReducer>