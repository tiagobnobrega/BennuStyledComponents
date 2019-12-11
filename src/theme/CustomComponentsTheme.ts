import * as CardHorizontal from '../components/CardHorizontal/styled';
import {ThemeVariables, themeVariables} from './themeVariables';

export interface CustomComponentsTheme extends ThemeVariables {
  cardHorizontal?: Partial<CardHorizontal.ICardHorizontalVariants>;
  cardSlider?: Partial<CardHorizontal.ICardHorizontalVariants>;
}

export const buildTheme = (themeVars = themeVariables) => ({
  cardHorizontal: CardHorizontal.buildVariants(themeVariables),
  ...themeVars,
});
