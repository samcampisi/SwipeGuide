import { AxiosError } from 'axios';
import { IGuide } from 'interfaces/IGuide';

export interface GuidesState {
  guidesMap: { [key: number]: IGuide };
  likes: { [key: number]: number };
  isLoadingGuides?: boolean;
  error?: AxiosError;
}

export const initialGuidesState: GuidesState = {
  guidesMap: {},
  likes: {},
  isLoadingGuides: false,
};
