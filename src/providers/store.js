import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { api } from "../api";

// notice that in order to migrate both sagas and RTK coexists without problem
export const sagaMiddleware = createSagaMiddleware();
// the sore is using the configureStore wrapper that comes with redux/toolkit
export const store = configureStore({
  reducer: {
    // just one reducer should be added for all endpoints when working with RTK redux
    [api.reducerPath]: api.reducer,
  },
  // here also both middleware for saga and RTK are integrated just in order to make a soft refactoring
  middleware: (defaultMiddleware) => [
    ...defaultMiddleware({
      serializableCheck: false,
    }),
    sagaMiddleware,
    api.middleware,
  ],
});
