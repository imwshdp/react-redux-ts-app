// ACTION TYPES ENUM
export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

// ACTIONS
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

// ACTIONS TYPES
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;

// STATE TYPE
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}