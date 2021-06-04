import { IStep } from './IStep';

export interface IGuide {
  Time: number;
  URL: string;
  MainTask: string;
  MainTaskSummary: string;
  Categories: string[];
  Ingredients: string[];
  Requirements: string[];
  Tips: string[];
  Views: number;
  AuthorsCount: number;
  Id: number;
  Steps?: IStep[];
}
