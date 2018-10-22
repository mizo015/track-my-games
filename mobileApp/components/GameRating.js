import React from 'react';
import { View, Text } from 'react-native';

import { IconFA } from './Icons';
import { gameItem } from '../styles/Games';

const GameRating = ({ funRate }) => (
  <View style={gameItem.right}>
    {[...new Array(Number(funRate))].map((v, i) => (
      <IconFA key={i} name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
    ))}
  </View>
);

export default GameRating;
