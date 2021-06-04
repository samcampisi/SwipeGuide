import { Navigation } from 'react-native-navigation';

import configureStore from 'config/store';
import registerScreens from 'config/registerScreens';
import SCREEN_NAMES from 'constants/screenNames';
import navDefaultOptions from 'theme/navDefaultOptions';

export default class NavigationManager {
  static setup() {
    this.store = configureStore().store;
    this.persistor = configureStore().persistor;

    Navigation.events().registerAppLaunchedListener(() => {
      registerScreens(this.store, this.persistor);

      Navigation.setDefaultOptions(navDefaultOptions);

      Navigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: SCREEN_NAMES.HOME_SCREEN,
                  options: {
                    topBar: {
                      title: { text: 'Welcome to Guides!' },
                    },
                  },
                },
              },
            ],
          },
        },
      });
    });
  }
}
