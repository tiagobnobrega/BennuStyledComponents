import React, {useContext} from 'react';
import {ImageSourcePropType, ViewProps, Text} from 'react-native';
import {CardWrapper, ICardHorizontalVariantsProps, NewsImage, CardTextArea, PublisherImage, NewsTitle, NewsInfo, BookmarkIcon} from './styled';
import {BackgroundColorProps, LayoutProps, SpaceProps} from 'styled-system';
import {ThemeContext} from 'styled-components';

interface CardHorizontalProps extends BackgroundColorProps, SpaceProps, ViewProps, ICardHorizontalVariantsProps {
  newsImageSource: ImageSourcePropType;
  publisherImageSource: ImageSourcePropType;
  title: string;
  date: string;
  timeToRead: string;
  renderIcon?: (props: object) => React.ReactNode;
}

export default function CardHorizontal({newsImageSource, publisherImageSource, title, date, timeToRead, renderIcon, ...props}: CardHorizontalProps) {
  const theme = useContext(ThemeContext);
  return (
    <CardWrapper {...props} theme={theme}>
      <NewsImage imageBorder={props.imageBorder} theme={theme} source={newsImageSource} />
      <CardTextArea space={theme.space}>
        <PublisherImage source={publisherImageSource} />
        <NewsTitle>
          <Text>{title}</Text>
        </NewsTitle>
        <NewsInfo>
          <Text>
            {date} . {timeToRead}
          </Text>
        </NewsInfo>
        {renderIcon && <BookmarkIcon space={theme.space}> {renderIcon({...props})}</BookmarkIcon>}
      </CardTextArea>
    </CardWrapper>
  );
}
