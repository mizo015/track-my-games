import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '../components/Icons';
import GamesScreen from '../screens/GamesScreen';
import LinksScreen from '../screens/LinksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen';

import { footerStyles } from '../styles/App';

const GamesStack = createStackNavigator({
  Home: GamesScreen,
  GameDetails: GameDetailsScreen,
});

GamesStack.navigationOptions = {
  tabBarLabel: 'Games',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon type="FontAwesome" focused={focused} name="line-chart" />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: ProfileScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
};

export default createBottomTabNavigator(
  {
    GamesStack,
    LinksStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      ...footerStyles,
    },
  }
);
