import { StyleSheet } from 'react-native';

import {
  defaultBorderColor,
  defaultBorderWidth,
  defaultBackgroundColor,
  secondaryBackgroundColor,
  primaryColor,
} from './Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryBackgroundColor,
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    height: 100,
    backgroundColor: defaultBackgroundColor,
    padding: 20,
    borderColor: defaultBorderColor,
    borderTopWidth: defaultBorderWidth,
  },
  headerImageContainer: {
    flex: 0,
  },
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: primaryColor,
    borderWidth: 4,
  },
  headerCenter: {
    flex: 2,
    padding: 10,
  },
  headerRight: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-end',
  },
});
