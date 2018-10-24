import { StyleSheet } from 'react-native';
import {
  defaultBorderColor,
  defaultBorderWidth,
  defaultBackgroundColor,
  secondaryBackgroundColor,
} from './Constants';

const fontFamily = 'Roboto-Regular';

const input = {
  height: 40,
  backgroundColor: defaultBackgroundColor,
  margin: 10,
  paddingLeft: 5,
  borderWidth: defaultBorderWidth,
  borderColor: defaultBorderColor,
};

export const styles = StyleSheet.create({
  input,
  textInput: {
    ...input,
    fontFamily,
    height: 80,
  },
  pickerContainer: {
    ...input,
    height: 50,
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
  pickerText: {
    flex: 1,
  },
  pickerItem: {
    height: 40,
    padding: 0,
    margin: 0,
  },
});
