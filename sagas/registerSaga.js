import registerUser from '../actions/registerUserActionCreator'
import { put, takeEvery } from 'redux-saga/effects'

export function* registerUser(user) {
    ToastAndroid.show(user.loginName, ToastAndroid.SHORT);
    yield put ({type: 'REGISTER_USER'})
  }