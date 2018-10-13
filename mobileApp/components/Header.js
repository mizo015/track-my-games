import React from 'react';
import Proptypes from 'prop-types';
import { Container, Header as NBHeader, Left, Body, Right, Button, Title } from 'native-base';

import { IconEntypo } from './Icons';
import { styles } from '../styles/App';

const Header = props => (
  <Container style={styles.headerContainer}>
    <NBHeader style={styles.header}>
      <Left>
        <Button transparent>
          <IconEntypo name="menu" size={30} />
        </Button>
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </NBHeader>
  </Container>
);

Header.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Header;
