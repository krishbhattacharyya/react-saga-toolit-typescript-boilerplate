import { configureStore, ThunkAction, Action, MiddlewareArray  } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jsonPlaceholderReducer from '../features/jsonplaceholder/jsonplaceholderSlice';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    jsonplaceholder: jsonPlaceholderReducer, 
  },
  //middleware: [sagaMiddleware]
  //middleware: [sagaMiddleware, logger] as const,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    //{thunk:false} for disable thunk
  ).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
