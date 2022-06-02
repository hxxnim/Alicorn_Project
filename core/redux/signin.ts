import { createAction } from "typesafe-actions";
import { error } from "@/../constance/error";
import { signinRequest } from "@/../constance/types";
import { call, put, takeLatest } from "redux-saga/effects";
import { IS_LOGIN } from "./auth";
import { refreshTokenApi, signinApi } from "../api/signin";
import { responseGenerator, signinResponse } from "@/../constance/types";

const prefix = "signin";

const ERROR = `${prefix}/ERROR`
const SET_EMAIL = `${prefix}/SET_EMAIL`;
const SET_PASSWORD = `${prefix}/SET_PASSWORD`;
const SIGNIN = `${prefix}/SIGNIN`;
const SIGNIN_SUCCESS = `${prefix}/${SIGNIN}_SUCCESS`;
const SIGNIN_FAILURE = `${prefix}/${SIGNIN}_FAILURE`;
const REFRESH_TOKEN = `${prefix}/REFRESH_TOKEN`;
const REFRESH_TOKEN_SUCCESS = `${REFRESH_TOKEN}_SUCCESS`;
const REFRESH_TOKEN_FAILURE = `${REFRESH_TOKEN}_FAILURE`;

export const setEmail = createAction(SET_EMAIL)<string>();
export const setPassword = createAction(SET_PASSWORD)<string>();
export const signin = createAction(SIGNIN)<signinRequest>();
export const signinSuccess = createAction(SIGNIN_SUCCESS)<string>();
export const signinFailure = createAction(SIGNIN_FAILURE)<error>();
export const refreshToken = createAction(REFRESH_TOKEN)<{
  callback: () => void;
}>();
export const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS)();
export const refreshTokenFailure = createAction(REFRESH_TOKEN_FAILURE)<error>();

type signinActionType =
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof signinSuccess>
  | ReturnType<typeof signinFailure>;

export { SIGNIN, REFRESH_TOKEN }

export const refreshTokenSaga = function* (action: any) {
  const FAILURE = `${REFRESH_TOKEN}_FAILURE`;
  const SUCCESS = `${REFRESH_TOKEN}_SUCCESS`;
  const callback = action.payload.callback;
  try {
    const response: signinResponse = yield call(refreshTokenApi);
    yield put({
      type: SUCCESS,
    });
    localStorage.setItem("access_token", response.access_token);
    yield call(callback);
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: REFRESH_TOKEN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

export const siginRequestSaga = function* (action: any) {
  const SUCCESS = `${SIGNIN}_SUCCESS`;
  const FAILURE = `${SIGNIN}_FAILURE`;

  try {
    const response: responseGenerator = yield call(signinApi, action.payload);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    yield put({
      type: IS_LOGIN,
      payload: true,
    });
  } catch (e) {
    if (e.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...e.response.data, type: SIGNIN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

interface SigninState {
  id: string;
  password: string;
  error: any | error;
}

const initialState: SigninState = {
  id: "",
  password: "",
  error: {
    type: "",
    status: 0,
    message: "",
  },
};

export default function signinReducer(
  state: SigninState = initialState,
  action: signinActionType
) {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_EMAIL: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export function* signinSaga() {
  yield takeLatest(SIGNIN, siginRequestSaga);
  yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
}

