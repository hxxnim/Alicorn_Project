import { createAction } from "typesafe-actions";
import createAsyncSaga, {
  asyncActionCreator,
  createAsyncAction,
} from "@/../utils/reduxUtils";
import { getUserNamePayload } from "@/../constance/types";
import { takeEvery } from "redux-saga/effects";

const prefix = "message";

const SET_SEARCH_USER_NAME = `${prefix}/SET_SEARCH_USER_NAME`;

export const setSearchUserName = createAction(SET_SEARCH_USER_NAME,)<getUserNamePayload>();

// export const getUserNameSaga = createAsyncSaga(getUserName, );

interface MessageState {
  search: getUserNamePayload;
}

const initialState: MessageState = {
  search: {
    name: '',
  },
};

export default function messageReducer(
  state: MessageState = initialState,
  action: ReturnType<typeof setSearchUserName>
) {
  switch (action.type) {
    case SET_SEARCH_USER_NAME:
      return {
        ...state,
        search: {
          ...state.search,
          ...action.payload,
        }
      };
    default:
      return state;
  }
}

export function* messageSaga() {
  // yield takeEvery()
}