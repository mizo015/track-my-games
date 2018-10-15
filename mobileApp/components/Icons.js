import React from 'react';
import PropTypes from 'prop-types';
import { Icon as ExpoIcon } from 'expo';
import { Platform } from 'react-native';

import { iconColor, activeIconColor } from '../styles/Constants';

const Icon = props => <ExpoIcon.Ionicons {...props} />;
const IconEntypo = props => <ExpoIcon.Entypo {...props} />;
const IconFA = props => <ExpoIcon.FontAwesome {...props} />;
const IconMCI = props => <ExpoIcon.MaterialCommunityIcons {...props} />;

const defaultProps = {
  size: 20,
  color: iconColor,
};

const propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
IconEntypo.propTypes = propTypes;
IconEntypo.defaultProps = defaultProps;
IconFA.propTypes = propTypes;
IconFA.defaultProps = defaultProps;

const TabBarIcon = props => {
  /* eslint-disable react/destructuring-assignment */
  const newProps = {
    ...props,
    /* eslint-disable react/destructuring-assignment */
    color: props.focused ? activeIconColor : iconColor,
    style: { marginBottom: -3 },
    size: 25,
  };

  switch (props.type) {
    case 'MCI':
      return <IconMCI {...newProps} />;
    case 'FontAwesome':
      return <IconFA {...newProps} />;
    default:
      return <IconEntypo {...newProps} />;
  }
};

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
