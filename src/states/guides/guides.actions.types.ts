import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { GuidesState } from './guides.state';
import { IGuide } from 'interfaces/IGuide';

export enum GuidesActionTypes {
  FETCH_GUIDES = 'FETCH_GUIDES',
  FETCH_GUIDES_SUCCESS = 'FETCH_GUIDES_SUCCESS',
  FETCH_GUIDES_FAILURE = 'FETCH_GUIDES_FAILURE',
  FETCH_GUIDE_DETAIL = 'FETCH_GUIDE_DETAIL',
  FETCH_GUIDE_DETAIL_SUCCESS = 'FETCH_GUIDE_DETAIL_SUCCESS',
  FETCH_GUIDE_DETAIL_FAILURE = 'FETCH_GUIDE_DETAIL_FAILURE',
  LIKE_GUIDE = 'LIKE_GUIDE',
}

export interface FetchGuidesRequest extends Action {
  type: GuidesActionTypes.FETCH_GUIDES;
}

export interface FetchGuidesSuccess extends Action {
  type: GuidesActionTypes.FETCH_GUIDES_SUCCESS;
  payload: {
    guides: IGuide[];
  };
}

export interface FetchGuidesFailure extends Action {
  type: GuidesActionTypes.FETCH_GUIDES_FAILURE;
  payload: { error: any };
}

export interface FetchGuideDetailRequest extends Action {
  type: GuidesActionTypes.FETCH_GUIDE_DETAIL;
}

export interface FetchGuideDetailSuccess extends Action {
  type: GuidesActionTypes.FETCH_GUIDE_DETAIL_SUCCESS;
  payload: { guide: IGuide };
}

export interface FetchGuideDetailFailure extends Action {
  type: GuidesActionTypes.FETCH_GUIDE_DETAIL_FAILURE;
  payload: { error: any };
}

export interface LikeGuide extends Action {
  type: GuidesActionTypes.LIKE_GUIDE;
  payload: {
    id: number;
  };
}

export type GuidesActions =
  | FetchGuidesRequest
  | FetchGuidesSuccess
  | FetchGuidesFailure
  | FetchGuideDetailRequest
  | FetchGuideDetailSuccess
  | FetchGuideDetailFailure
  | LikeGuide;

export type ThunkResult = ThunkAction<
  void,
  GuidesState,
  undefined,
  GuidesActions
>;
