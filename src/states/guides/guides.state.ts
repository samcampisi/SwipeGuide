import { AxiosError } from 'axios';
import { IGuide } from 'interfaces/IGuide';

export interface GuidesState {
  guidesMap: { [key: number]: IGuide };
  isLoadingGuides?: boolean;
  error?: AxiosError;
}

export const initialGuidesState: GuidesState = {
  guidesMap: {},
  isLoadingGuides: false,
};
