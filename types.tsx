/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackScreenProps } from '@react-navigation/stack';

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
BottomTabScreenProps<RootTabParamList, Screen>,
NativeStackScreenProps<RootStackParamList>
>;

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  NotFound: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined
  Profile: undefined
  Settings: undefined
};

export type HomeTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
