import { Navigation } from 'react-native-navigation';

import configureStore from 'config/store';
import registerScreens from 'config/registerScreens';
import SCREEN_NAMES from 'constants/screenNames';

export default class NavigationManager {
  static setup() {
    this.store = configureStore().store;
    this.persistor = configureStore().persistor;

    Navigation.events().registerAppLaunchedListener(() => {
      registerScreens(this.store, this.persistor);

      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: SCREEN_NAMES.HOME_SCREEN,
                },
              },
            ],
          },
        },
      });
    });
  }
}
