import React from 'react';
import PropTypes from 'prop-types';
import { Icon as ExpoIcon } from 'expo';
import { Platform } from 'react-native';

import { iconColor, activeIconColor } from '../styles/Constants';

const Icon = props => <ExpoIcon.Ionicons {...props} />;
const IconEntypo = props => <ExpoIcon.Entypo {...props} />;
const IconFA = props => <ExpoIcon.FontAwesome {...props} />;

Icon.defaultProps = {
  size: 20,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

const TabBarIcon = props => (
  <Icon
    {...props}
    /* eslint-disable react/destructuring-assignment */
    color={props.focused ? activeIconColor : iconColor}
    style={{ marginBottom: -3 }}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

const PlatformIcon = props => (
  <Icon
    {...props}
    name={Platform.OS === 'ios' ? `ios-${props.name}-outline` : `md-${props.name}`}
  />
);

PlatformIcon.defaultProps = {
  size: 20,
  style: {},
};

export { Icon, TabBarIcon, PlatformIcon, IconEntypo, IconFA };
