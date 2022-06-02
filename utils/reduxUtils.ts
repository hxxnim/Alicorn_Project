
import { createAction } from 'typesafe-actions';
import { ServerResponse } from "http";
import { call, put } from 'redux-saga/effects';

// 비동기 액션 타입명 생성기
export const asyncActionCreator = (actionName: any) => {
  const asyncTypeAction = ['_REQUEST', '_SUCCESS', '_FAILURE'];
  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
  };
};

// 비동기 액션 생성기
export const createAsyncAction = (asyncAction: any) => {
  return {
    request: createAction(asyncAction.REQUEST),
    success: createAction(asyncAction.SUCCESS),
    failure: createAction(asyncAction.FAILURE),
  };
};

// 사가 제너레이터 생성기
export default function createAsyncSaga(asyncAction: any, asyncFunction: any) {
  return function* saga(action: any) {
    try {
      const result: ServerResponse = yield call(asyncFunction, action?.payload); // api 호출 이때 파라미터는 request()에서 받은 값으로 전달
      console.log('result : ', result);
      yield put(asyncAction.success(result)); // success  액션함수를 dispatch 하여 api결과값 반환
    } catch (e) {
      console.log(
        '=====================================error========================================',
      );
      yield put(asyncAction.failure({ error: '' })); // failure  액션함수를 dispatch 하여 error 반환
    }
  };
}