import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';


import {getUser,setUser,setLoading} from './jsonplaceholderSlice';

const fetchAPI = async (id:number) =>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    //console.log(response);
  return response;
}

function* fetchUser(action:any) {
  //action
  console.log(action);
  //action.payload.userId
  yield put(setLoading());
  const {data} = yield call(fetchAPI,action.payload)
  yield put(setUser(data));
  //console.log(data)
}
  

export function* jsopnPlaceholderSaga() {
    console.log('Hello Sagas!')
    yield all([takeEvery(getUser.type, fetchUser)])
}