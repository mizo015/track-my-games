import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { gameItem } from '../styles/Games';
import { BoldText, MutedSmallText, RegularText } from './StyledText';
import { IconEntypo, IconFA } from './Icons';

const GameItem = ({ item, _handlePress }) => {
  return (
    <TouchableOpacity onPress={_handlePress}>
      <View style={gameItem.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <IconFA name="soccer-ball-o" size={40} color="red" />
          <RegularText style={{ borderWidth: 1, borderColor: 'grey', padding: 1 }}>
            {'1 - 2'}
          </RegularText>
        </View>
        <View style={{ flex: 3 }}>
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
          <MutedSmallText>01/01/2019</MutedSmallText>
          <MutedSmallText style={{ marginBottom: 8 }}>at 7pm</MutedSmallText>
          <IconEntypo name="emoji-happy" size={30} />
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
