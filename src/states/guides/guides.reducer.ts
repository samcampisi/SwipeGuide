import { Reducer } from 'redux';
import { GuidesState, initialGuidesState } from './guides.state';
import {
  GuidesActions,
  GuidesActionTypes,
  FetchGuidesSuccess,
  FetchGuidesFailure,
  FetchGuideDetailSuccess,
  LikeGuide,
} from './guides.actions.types';

export const guidesReducer: Reducer<GuidesState, GuidesActions> = (
  state: GuidesState = initialGuidesState,
  action: GuidesActions,
): GuidesState => {
  switch (action.type) {
    case GuidesActionTypes.FETCH_GUIDES:
      return {
        ...state,
        isLoadingGuides: true,
        error: undefined,
      };
    case GuidesActionTypes.FETCH_GUIDES_SUCCESS: {
      action = action as FetchGuidesSuccess;

      let newGuides = {};

      if (action.payload.guides.length) {
        newGuides = action.payload.guides.reduce(
          (a, b) => ({ ...a, [b.Id]: b }),
          {},
        );
      }

      const guidesMap = { ...state.guidesMap, ...newGuides };

      return {
        ...state,
        isLoadingGuides: false,
        guidesMap,
        error: undefined,
      };
    }
    case GuidesActionTypes.FETCH_GUIDE_DETAIL_SUCCESS: {
      action = action as FetchGuideDetailSuccess;

      const guidesMap = { ...state.guidesMap };
      guidesMap[action.payload.guide.Id] = action.payload.guide;

      return {
        ...state,
        guidesMap,
        isLoadingGuides: false,
        error: undefined,
      };
    }
    case GuidesActionTypes.FETCH_GUIDES_FAILURE:
    case GuidesActionTypes.FETCH_GUIDE_DETAIL_FAILURE:
      action = action as FetchGuidesFailure;
      return {
        ...state,
        isLoadingGuides: false,
        error: action.payload.error,
      };
    case GuidesActionTypes.LIKE_GUIDE:
      action = action as LikeGuide;

      const likes = { ...state.likes };
      const oldLikes = likes[action.payload.id] || 0;
      likes[action.payload.id] = oldLikes + 1;

      return {
        ...state,
        likes,
      };
    default:
      return state;
  }
};
