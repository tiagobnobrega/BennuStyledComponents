export const themeVariables = {
  //default scales
  colors: {
    primary: '#f0f',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: ['0', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'],
  borderRadius: [0, 2, 4, 8, 12],
  fontFamily: {primary: 'Roboto', alt: 'Roboto'},
};

export type ThemeVariables = typeof themeVariables;
export interface ThemeVariablesProps {
  theme: ThemeVariables;
}
export type VariantBuilder = (themeVariables: ThemeVariables) => any;
export type VariantProps<V> = Partial<Record<keyof V, string>>;
