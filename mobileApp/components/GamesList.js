import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { gameItem } from '../styles/Games';
import { BoldText } from './StyledText';
import { PlatformIcon, IconEntypo, IconFA } from './Icons';

const GameItem = ({ item, _handlePress }) => {
  return (
    <TouchableOpacity onPress={_handlePress}>
      <View style={gameItem.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <IconFA name="soccer-ball-o" style={{ marginBottom: 10 }} size={40} color="red" />
          <Text style={{ borderWidth: 1, borderColor: 'grey', padding: 3 }}>1 - 2</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Text>
            <BoldText style={{ marginRight: 5 }}>{item.key}</BoldText>
            - 50 mins
          </Text>
          <Text>Shelburn Farm</Text>
          <View style={gameItem.stats}>
            <Text>Goals: 1</Text>
            <Text>Assists: 2</Text>
            <Text>Lost: 5</Text>
            <Text>On Target: 5</Text>
            <Text>Off Target: 5</Text>
          </View>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text>01/01/2019</Text>
          <Text style={{ marginBottom: 8 }}>at 7pm</Text>
          <IconEntypo active name="emoji-happy" size={30} />
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
