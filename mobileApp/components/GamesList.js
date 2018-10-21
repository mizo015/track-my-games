import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { gameItem } from '../styles/Games';
import { BoldText, MutedSmallText, RegularText } from './StyledText';
import { IconFA } from './Icons';

const GameItem = ({ item, _handlePress }) => {
  return (
    <TouchableOpacity onPress={_handlePress}>
      <View style={gameItem.container}>
        <View style={gameItem.left}>
          <IconFA name="trophy" size={40} color="#F44336" />
          <RegularText style={{ padding: 1, color: '#009688' }}>
            {'1 - 2'}
          </RegularText>
        </View>
        <View style={gameItem.center}>
          <BoldText>
            {item.key}
            {' - 50 mins'}
          </BoldText>
          <RegularText>Shelburn Farm</RegularText>
          <View style={gameItem.stats}>
            <RegularText>Goals: 1</RegularText>
            <RegularText>Assists: 2</RegularText>
            <RegularText>Lost: 5</RegularText>
            <RegularText>On Target: 5</RegularText>
            <RegularText>Off Target: 5</RegularText>
          </View>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <View style={gameItem.right}>
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
            <IconFA name="soccer-ball-o" size={15} color="#FFD600" style={{ marginRight: 4 }} />
          </View>
          <MutedSmallText>01/01/2018</MutedSmallText>
          <MutedSmallText>at 7pm</MutedSmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class GamesList extends React.Component {
  state = {

  }

  render() {
    const { data } = this.props;

    return (
      <FlatList data={data} renderItem={({item}) => <GameItem item={item} _handlePress={this._handlePress}/>} />
    );
  }

  _handlePress = () => {
    const { navigation } = this.props;

    navigation.navigate('GameDetails');
  };
}

GamesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    })
  ).isRequired,
};

export default GamesList;
