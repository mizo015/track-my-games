import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { gameItem } from '../styles/Games';
import { BoldText, MutedSmallText, RegularText } from './StyledText';
import { IconFA, IconEntypo } from './Icons';
/*
{
  "dateTime": "07/07/2018 02:02:00",
  "lostBall": "3",
  "snaps": ["some_pic_url"],
  "notes": "blah blah",
  "offTargetShots": "1",
  "assists": "1",
  "onTargetShots": "2",
  "defendedBalls": "4",
  "gameTimeMins": "50",
  "id": "111",
  "goalsScored": "1",
  "fun": "1"
},
*/

const GameItem = ({ item, _handlePress }) => {
  const trophyColor = item.isWon ? '#009688' : 'red';

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
