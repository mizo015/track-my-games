import React from 'react';
import PropTypes from 'prop-types';
import { View, Picker as NativePicker } from 'react-native';

import { RegularText } from './StyledText';
import { styles } from '../styles/Inputs';

const Picker = ({ selectedValue, options, label, _changeHandler }) => (
  <View style={styles.pickerContainer}>
    <RegularText style={styles.pickerText}>{label}</RegularText>
    <NativePicker
      selectedValue={selectedValue}
      style={styles.picker}
      itemStyle={styles.pickerItem}
      onValueChange={_changeHandler}
    >
      {options.map((option, i) => (
        <NativePicker.Item key={i} label={option.label} value={option.value} />
      ))}
    </NativePicker>
  </View>
);

Picker.propTypes = {
  _changeHandler: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])
    .isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default Picker;