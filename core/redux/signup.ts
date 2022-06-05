import { createAction } from "typesafe-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { error } from "@/../constance/error";
import { responseGenerator, signupRequest } from "@/../constance/types";
import { signupApi } from "../api/signup";

export const NAME = "signup/NAME";
export const EMAIL = "signup/EMAIL";
export const PASSWORD = "signup/PASSWORD";
export const SIGNUP = "signup/SIGNUP";
export const SIGNUP_SUCCESS = "signup/SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "signup/SIGNUP_FAILURE";
export const RESET = "signup/RESET";

export const setName = createAction(NAME)<string>();
export const setEmail = createAction(EMAIL)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const signup = createAction(SIGNUP)<signupRequest>();
export const signupSuccess = createAction(SIGNUP_SUCCESS)<boolean>();
export const signupFailure = createAction(SIGNUP_FAILURE)<error>();
export const reset = createAction(RESET)();

export type signupActionType =
  | ReturnType<typeof setName>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>
  | ReturnType<typeof signup>
  | ReturnType<typeof reset>;

export const sigupRequestSaga = function* (action: any) {
  const callback = () => (window.location.href = "/");
  const FAILURE = `${SIGNUP}_FAILURE`;
  const SUCCESS = `${SIGNUP}_SUCCESS`;
  const accessToken = localStorage.getItem("access_token");
  try {
    const response: responseGenerator = yield call(
      signupApi,
      accessToken,
      action.payload
    );
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    yield call(callback);
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: SIGNUP },
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

interface SignupState {
  name: string;
  email: string;
  password: string;
  error: error;
}

const initState: SignupState = {
  name: "",
  email: "",
  password: "",
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

export default function signupReducer(
  state: SignupState = initState,
  action: signupActionType
): SignupState {
  switch (action.type) {
    case NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case RESET: {
      return {
        ...state,
        ...initState,
      };
    }
    default: {
      return state;
    }
  }
};

export function* signupSaga() {
  yield takeEvery(SIGNUP, sigupRequestSaga);
}
