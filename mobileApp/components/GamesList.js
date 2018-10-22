import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import { gameItem } from '../styles/Games';
import { BoldText, MutedSmallText, RegularText } from './StyledText';
import { IconFA, IconEntypo } from './Icons';
import GameRating from './GameRating';

const GameItem = ({ item, _handlePress }) => {
  const trophyColor = item.isWon ? '#4CAF50' : '#F44336';
  const date = moment.unix(item.dateTime);

  return (
    <TouchableOpacity onPress={_handlePress}>
      <View style={gameItem.container}>
        <View style={gameItem.left}>
          <IconFA name="trophy" size={40} color={trophyColor} />
          <RegularText style={gameItem.score}>{item.score}</RegularText>
        </View>
        <View style={gameItem.center}>
          <BoldText>
            {item.name}
            {` - ${item.gameTimeMins} mins`}
          </BoldText>
          <RegularText style={gameItem.location}>
            <IconEntypo name="location-pin" size={12} />
            {item.location}
          </RegularText>
          <View style={gameItem.stats}>
            <RegularText>{`Goals: ${item.goalsScored}`}</RegularText>
            <RegularText>{`Assists: ${item.assists}`}</RegularText>
            <RegularText>{`Lost: ${item.lostBall}`}</RegularText>
            <RegularText>{`On Target: ${item.onTargetShots}`}</RegularText>
            <RegularText>{`Off Target: ${item.offTargetShots}`}</RegularText>
          </View>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <GameRating funRate={item.fun} />
          <MutedSmallText>{`${date.format('MM/DD/YYYY')}`}</MutedSmallText>
          <MutedSmallText>{`at ${date.format('Ha')}`}</MutedSmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

class GamesList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <GameItem item={item} _handlePress={this._handlePress} />}
      />
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
