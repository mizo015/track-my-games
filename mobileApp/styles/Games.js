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
    flexWrap: 'wrap',
    paddingTop: 6,
  },
  left: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
  },
  center: {
    flex: 3,
  },
  score: {
    padding: 1,
    color: '#009688',
  },
  location: {
    fontFamily: 'Roboto-ThinItalic',
    fontSize: 12,
  },
});
