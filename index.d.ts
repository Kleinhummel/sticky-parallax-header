import React, {ReactElement} from 'react';
import { ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, TextStyle, ViewStyle, ImageResizeMode } from 'react-native';

export interface HeaderTypeProp {
  type?: 'TabbedHeader' | 'DetailsHeader' | 'AvatarHeader'
}

export interface HeaderSizeProps {
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface OnChangeTabArguments {
  from: number;
  i: number;
  ref: any;
}

export interface Tab {
  content: React.ReactElement;
  title: string;
}
export interface SharedProps {
  backgroundImage?: ImageSourcePropType;
  headerHeight?: number;
  snapToEdge?: boolean;
  bounces?: boolean;
}

export interface IconProps {
  leftTopIcon?: ImageSourcePropType;
  leftTopIconOnPress?: () => void;
  rightTopIcon?: ImageSourcePropType;
  rightTopIconOnPress?: () => void;
}

export interface TabsSharedProps {
  tabTextActiveStyle: TextStyle;
  tabTextContainerActiveStyle: ViewStyle;
  tabTextContainerStyle: ViewStyle;
  tabTextStyle: TextStyle;
  tabWrapperStyle: ViewStyle;
  tabs: Tab[];
  tabsContainerStyle: ViewStyle;
}


export interface TabbedHeaderProps extends SharedProps, TabsSharedProps {
  backgroundColor?: string;
  foregroundImage?: ImageSourcePropType;
  header?: () => ReactElement;
  logo?: ImageSourcePropType;
  logoContainerStyle?: ViewStyle;
  logoResizeMode?: ImageResizeMode;
  logoStyle?: ViewStyle;
  renderBody?: (title: string) => ReactElement;
  scrollEvent?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  title?: string;
  titleStyle?: TextStyle; 
}

export interface DetailsHeaderProps extends SharedProps, IconProps {
  backgroundColor?: string;
  hasBorderRadius?: boolean;
  iconNumber?: number;
  image?: number;
  renderBody?: (title: string) => ReactElement;
  tag?: string;
  title?: string;
}

export interface AvatarHeaderProps extends SharedProps, IconProps {
  backgroundColor?: string;
  foreground?: () => ReactElement;
  hasBorderRadius?: boolean;
  header?: () => ReactElement;
  image?: number;
  parallaxHeight?: number;
  renderBody?: (title: string) => ReactElement;
  scrollEvent?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  snapStartThreshold?: number;
  snapStopThreshold?: number;
  snapValue?: number;
  subtitle?: string;
  title?: string;
  transparentHeader?: boolean;
}

export interface CustomHeaderProps extends SharedProps, TabsSharedProps {
  background: ReactElement;
  backgroundColor: string;
  children?: ReactElement;
  foreground?: ReactElement;
  header: ReactElement;
  headerSize?: ({ x, y, width, height }: HeaderSizeProps) => void;
  initialPage?: number;
  onChangeTab?: ({ i, ref, from }: OnChangeTabArguments) => void;
  onEndReached?: () => void;
  parallaxHeight?: number;
  scrollEvent?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  snapStartThreshold?: number;
  snapStopThreshold?: number;
  snapValue?: number;
  tabsContainerBackgroundColor?: string;
  transparentHeader?: boolean;
}

type StickyParallaxHeaderProps = HeaderTypeProp & (DetailsHeaderProps | AvatarHeaderProps | TabbedHeaderProps | CustomHeaderProps)

export default class StickyParallaxHeader extends React.Component<StickyParallaxHeaderProps, any> { }