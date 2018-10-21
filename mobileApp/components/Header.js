import React from 'react';
import Proptypes from 'prop-types';
import { Container, Header as NBHeader, Left, Body, Right, Button, Title } from 'native-base';
import { withNavigation } from 'react-navigation';

import { IconEntypo } from './Icons';
import { styles } from '../styles/App';
import { primaryColor } from '../styles/Constants';

const Header = props => {
  const { title } = props;

  return (
    <Container style={styles.headerContainer}>
      <NBHeader style={styles.header}>
        <Left />
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => props.navigation.navigate('NewGame')}>
            <IconEntypo name="add-to-list" size={25} color={primaryColor} />
          </Button>
        </Right>
      </NBHeader>
    </Container>
  );
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default withNavigation(Header);
