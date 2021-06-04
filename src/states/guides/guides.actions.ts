import { ThunkDispatch } from 'redux-thunk';
import { AxiosError, AxiosResponse } from 'axios';

import { GuidesState } from './guides.state';
import ApiService from 'services/ApiService';
import { IGuide } from 'interfaces/IGuide';
import {
  GuidesActionTypes,
  GuidesActions,
  ThunkResult,
  GuidesResponse,
  GuideResponse,
} from './guides.actions.types';

export const getGuides = (): ThunkResult => {
  return async (
    dispatch: ThunkDispatch<GuidesState, undefined, GuidesActions>,
  ) => {
    dispatch(getGuidesRequest());

    return ApiService.getInstance()
      .getClient()!
      .get('/guides')
      .then((response: AxiosResponse<GuidesResponse>) => {
        dispatch(getGuidesSuccess(response.data.data));
      })
      .catch((error: AxiosError) => {
        if (error.request || error.response)
          return dispatch(getGuidesFailure(error));
      });
  };
};

export const getGuidesRequest = (): GuidesActions => ({
  type: GuidesActionTypes.FETCH_GUIDES,
});

export const getGuidesSuccess = (guides: IGuide[]): GuidesActions => {
  return {
    type: GuidesActionTypes.FETCH_GUIDES_SUCCESS,
    payload: { guides },
  };
};

export const getGuidesFailure = (error: any): GuidesActions => ({
  type: GuidesActionTypes.FETCH_GUIDES_FAILURE,
  payload: { error },
});

export const getGuideDetail = (id: number): ThunkResult => {
  return async (
    dispatch: ThunkDispatch<GuidesState, undefined, GuidesActions>,
  ) => {
    dispatch(getGuideDetailRequest());

    return ApiService.getInstance()
      .getClient()!
      .get(`/guides/${id}`)
      .then((response: AxiosResponse<GuideResponse>) => {
        dispatch(getGuideDetailSuccess(response.data.data));
      })
      .catch((error: AxiosError) => {
        if (error.request || error.response)
          return dispatch(getGuideDetailFailure(error));
      });
  };
};

export const getGuideDetailRequest = (): GuidesActions => ({
  type: GuidesActionTypes.FETCH_GUIDE_DETAIL,
});

export const getGuideDetailSuccess = (guide: IGuide): GuidesActions => {
  return {
    type: GuidesActionTypes.FETCH_GUIDE_DETAIL_SUCCESS,
    payload: { guide },
  };
};

export const getGuideDetailFailure = (error: any): GuidesActions => ({
  type: GuidesActionTypes.FETCH_GUIDE_DETAIL_FAILURE,
  payload: { error },
});
