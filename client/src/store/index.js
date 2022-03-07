import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'reducers/authReducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from 'saga';

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
    authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga)