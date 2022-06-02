import { createAction } from "typesafe-actions";
import createAsyncSaga, {
  asyncActionCreator,
  createAsyncAction,
} from "@/../utils/reduxUtils";
import { GetUserNamePayload } from "@/../constance/message";
import { takeEvery } from "redux-saga/effects";

const prefix = "MESSAGE";

// action 타입 정의
const SET_SEARCH_USER_NAME = `${prefix}/SET_SEARCH_USER_NAME`;

// action 함수 정의
export const setSearchUserName = createAction(SET_SEARCH_USER_NAME)<GetUserNamePayload>();

// saga 비동기 함수
// export const getUserNameSaga = createAsyncSaga(getUserName, );

interface MessageState {
  search: GetUserNamePayload;
}

const InitialState: MessageState = {
  search: {
    name: '',
  },
};

export default function messageReducer(
  state: MessageState = InitialState,
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