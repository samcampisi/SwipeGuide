import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from 'screens/Home';

import SCREEN_NAMES from 'constants/screenNames';

export default function registerScreens(store, persistor) {
  Navigation.registerComponent(
    SCREEN_NAMES.HOME_SCREEN,
    () => props =>
      (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Home {...props} />
          </PersistGate>
        </Provider>
      ),
    () => Home,
  );
}
