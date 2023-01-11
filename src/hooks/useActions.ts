import { useDispatch } from 'react-redux';
import React from 'react';
import { Dispatch, bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators/index"

export const useActions = () => {
  const dispatch: Dispatch<any> = useDispatch();
  return bindActionCreators(ActionCreators, dispatch)
}