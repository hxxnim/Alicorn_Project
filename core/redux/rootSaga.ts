import { all } from 'redux-saga/effects';
import { signinSaga } from './signin';
import { signupSaga } from './signup';
import { searchSaga } from './search';
import { chatSaga } from './chat';

export default function* rootSaga() {
  yield all([
    signinSaga(), 
    signupSaga(),
    searchSaga(),
    chatSaga()
  ]);
}

export {}