import { StyleSheet } from 'react-native';
import { defaultBorderColor, defaultBorderWidth, defaultBackgroundColor } from './Constants';

const fontFamily = 'Roboto-Regular';
const inputHeight = 40;

const input = {
  height: inputHeight,
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
    margin: 5,
  },
  pickerText: {
    flex: 1,
    paddingTop: 15,
  },
  pickerItem: {
    width: 80,
    height: inputHeight,
    borderStyle: 'dotted',
    borderColor: defaultBorderColor,
    borderWidth: defaultBorderWidth,
  },
});
