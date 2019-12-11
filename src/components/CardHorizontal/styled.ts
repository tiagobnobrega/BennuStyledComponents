import {color, space, variant} from 'styled-system';
import styled from 'styled-components/native';
import {ThemeVariables, VariantProps} from '../../theme/themeVariables';
import flexboxItem, {FlexboxItemProps} from '../../theme/flexboxItem';
import {ImageProps} from 'react-native';

// * === Component Name === *
export const NAME = 'cardNewsHorizontal';

//* === Variants === *
export const buildVariants = (themeVariables: Pick<ThemeVariables, 'borderRadius'>) => {
  return {
    size: {
      sm: {height: '100px'},
      md: {height: '200px'},
      lg: {height: '300px'},
    },
    border: {
      round: {borderRadius: themeVariables.borderRadius[1]},
      sharp: {borderRadius: themeVariables.borderRadius[0]},
    },
    imageBorder: {
      round: {borderRadius: themeVariables.borderRadius[1]},
      sharp: {borderRadius: themeVariables.borderRadius[0]},
    },
  };
};
export type ICardHorizontalVariants = ReturnType<typeof buildVariants>;
export type ICardHorizontalVariantsProps = VariantProps<ICardHorizontalVariants>;

const defaultVariants = buildVariants({borderRadius: [0, 2, 4]});
const sizeVariants = variant({
  prop: 'size',
  scale: `${NAME}.size`,
  variants: defaultVariants.size,
});
const borderVariants = variant({
  prop: 'border',
  scale: `${NAME}.border`,
  variants: defaultVariants.border,
});
const imageBorderVariants = variant({
  prop: 'imageBorder',
  scale: `${NAME}.imageBorder`,
  variants: defaultVariants.border,
});

// * === Styled Components == *
export const CardWrapper = styled.View<ICardHorizontalVariantsProps & FlexboxItemProps>`
  border: 1px solid #000;
  flex: 1;
  width: 100%;
  flex-direction: row;
  ${borderVariants}
  ${sizeVariants}
  ${color}
  ${flexboxItem}
  ${space}
`;
CardWrapper.defaultProps = {
  size: 'md',
};

export const NewsImage = styled.Image<ICardHorizontalVariantsProps>`
  border-width: 1px;
  border-color: #00f;
  width: 150px;
  height: 150px;
  ${imageBorderVariants}
`;

export const CardTextArea = styled.View<Pick<ThemeVariables, 'space'>>`
  border-width: 1px;
  border-color: #0f0;
  width: 150px;
  height: 150px;
  flex-direction: column;
  flex: 1;
  padding: ${({space}) => space[1]};
`;

export const PublisherImage = styled.Image<ImageProps>`
  height: 20px;
`;

export const NewsTitle = styled.View`
  flex: 1;
`;

export const NewsInfo = styled.View`
  height: 20px;
`;

export const BookmarkIcon = styled.View<Pick<ThemeVariables, 'space'>>`
  position: absolute;
  top: ${({space}) => space[1]};
  left: ${({space}) => space[1]};
`;
