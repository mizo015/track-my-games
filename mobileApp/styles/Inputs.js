import { StyleSheet } from 'react-native';
import {
  defaultBorderColor,
  defaultBorderWidth,
  defaultBackgroundColor,
  primaryFontColor,
} from './Constants';

const fontFamily = 'Roboto-Regular';
const inputHeight = 40;
const regFontSize = 12;

const input = {
  height: inputHeight,
  backgroundColor: defaultBackgroundColor,
  margin: 10,
  paddingLeft: 5,
  borderWidth: defaultBorderWidth,
  borderColor: defaultBorderColor,
  fontSize: regFontSize,
  color: primaryFontColor,
};

export const styles = StyleSheet.create({
  input,
  textInput: {
    fontFamily,
    height: 80,
  },
  pickerContainer: {
    flex: 1,
  },
  pickerItem: {
    ...input,
    width: 60,
    height: inputHeight,
  },
});
