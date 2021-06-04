import {
  createStore,
  applyMiddleware,
  Middleware,
  compose,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GuidesState } from 'states/guides/guides.state';

import { guidesReducer } from 'states/guides/guides.reducer';

let middlewares: Middleware[] = [thunk];

if (__DEV__) {
  const reduxImmutableStateInvariant =
    require('redux-immutable-state-invariant').default();
  middlewares = [...middlewares, reduxImmutableStateInvariant, logger];
} else {
  middlewares = [...middlewares];
}

const enhancers = [applyMiddleware(...middlewares)];

const guidesPersistConfig = {
  key: 'guidesData',
  storage: AsyncStorage,
  timeout: undefined,
};

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['guidesData'],
  timeout: undefined,
};

const rootReducer = combineReducers({
  guidesData: persistReducer(guidesPersistConfig, guidesReducer),
  // Add other reducers here
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export interface ApplicationState {
  guidesData: GuidesState;
  // Add other reducers here
}

export default function configureStore(): any {
  let store = createStore(persistedReducer, compose(...enhancers));
  let persistor = persistStore(store);
  return { store, persistor };
}
