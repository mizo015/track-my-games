import { StyleSheet } from 'react-native';
import {
  defaultBorderColor,
  defaultBorderWidth,
  defaultBackgroundColor,
  secondaryBackgroundColor,
} from './Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: secondaryBackgroundColor,
  },
});

export const gameItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: defaultBackgroundColor,
    borderBottomColor: defaultBorderColor,
    borderBottomWidth: defaultBorderWidth,
    padding: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    flexWrap: 'wrap',
  },
});
