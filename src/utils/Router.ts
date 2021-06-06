import { Navigation } from 'react-native-navigation';

import SCREEN_NAMES from 'constants/screenNames';
import { IGuide } from 'interfaces/IGuide';

export default class Router {
  static goToGuideDetail(componentId: string, guide: IGuide) {
    Navigation.push(componentId, {
      component: {
        name: SCREEN_NAMES.GUIDE_DETAIL_SCREEN,
        passProps: { guide },
        options: {
          topBar: {
            title: {
              text: guide.MainTask,
            },
          },
        },
      },
    });
  }
}
