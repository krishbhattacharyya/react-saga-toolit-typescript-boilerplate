import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getUser,
  selectJsonPlaceholder,
  selectStatus
} from './jsonplaceholderSlice';
/*import styles from './Counter.module.css';*/

export function JsonPlaceholder() {
  const user = useAppSelector(selectJsonPlaceholder);
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch();

  useEffect(()=>{
    console.log(user)
  },[user])

  useEffect(()=>{
    console.log(status)
  },[status])

  return (
    <div>
      JSON placeholder
      <button onClick={()=>dispatch(getUser(1))}>Fetch Data</button>
      {
        (status==='loading')? <span>loading</span> : <span>loaded title: {user?.title}</span>
      }
    </div>
  );
}
