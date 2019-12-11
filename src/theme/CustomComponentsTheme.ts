import * as CardHorizontal from '../components/CardHorizontal/styled';
import {themeVariables} from './themeVariables';

export interface CustomComponentsTheme {
  [CardHorizontal.NAME]?: CardHorizontal.ICardHorizontalVariants;
}

export const buildTheme = (themeVars = themeVariables) => ({
  [CardHorizontal.NAME]: CardHorizontal.buildVariants(themeVariables),
  ...themeVars,
});
