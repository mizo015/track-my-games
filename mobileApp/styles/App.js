import { StyleSheet } from 'react-native';
import { tabHeaderColor, iconColor, activeIconColor } from './Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '10%',
  },
  header: {
    backgroundColor: tabHeaderColor,
  },
});

export const footerStyles = {
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
  },
  style: {
    backgroundColor: tabHeaderColor,
  },
  activeTintColor: activeIconColor,
  inactiveTintColor: iconColor,
  indicatorStyle: {
    backgroundColor: tabHeaderColor,
  },
};
