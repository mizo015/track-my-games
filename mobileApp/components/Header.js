import React from 'react';
import Proptypes from 'prop-types';
import { Header as NBHeader, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation';

import { IconEntypo } from './Icons';
import { styles } from '../styles/App';
import { primaryColor } from '../styles/Constants';

const Header = props => {
  const { title, refresh } = props;

  return (
    <NBHeader style={styles.header}>
      <Left />
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => props.navigation.navigate('NewGame', { refresh })}>
          <IconEntypo name="add-to-list" size={25} color={primaryColor} />
        </Button>
      </Right>
    </NBHeader>
  );
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
  refresh: Proptypes.func.isRequired,
};

export default withNavigation(Header);
