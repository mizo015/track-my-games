import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '../components/Icons';
import GamesScreen from '../screens/GamesScreen';
import StatsScreen from '../screens/StatsScreen';
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

const StatsStack = createStackNavigator({
  Links: StatsScreen,
});

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
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
    StatsStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      ...footerStyles,
    },
  }
);
