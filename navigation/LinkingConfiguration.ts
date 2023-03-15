import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home'
            }
          },
          Profile: {
            screens: {
              ProfileScreen: 'profile'
            }
          },
          Settings: {
            screens: {
              ProfileScreen: 'settings'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
};

export default linking;
