import React from 'react';
import { View, Text, Button } from 'react-native';

import Header from '../components/Header';
import Picker from '../components/Picker';
import SuccessFailureMessage from '../components/SuccessFailureMessage';

import LabeledInput from '../components/LabeledInput';
import { createGame } from '../factory/Game';
import { addGames } from '../api/user';
import { getItem, setItem } from '../storage/localStorage';

export default class NewGameScreen extends React.Component {
  static navigationOptions = {
    title: 'Add New Game',
  };

  state = {
    game: createGame(),
    addGameStatus: null,
  };

  render() {
    const { game, addGameStatus } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
        <Text>{ typeof navigation.state.params.refresh}</Text>
        <View style={{ flexDirection: 'row' }}>
          <LabeledInput
            label="Location:"
            placeholder=""
            onChangeText={location => this.setState({ game: { ...game, location } })}
            containerStyles={{ flex: 3 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <LabeledInput
            label="Give it A name:"
            placeholder="Give it a name! (league, field,...etc)"
            onChangeText={name => this.setState({ game: { ...game, name } })}
            containerStyles={{ flex: 3 }}
          />
          <Picker
            label="Did you Win?"
            _changeHandler={isWon => this.setState({ game: { ...game, isWon } })}
            options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
            selectedValue={game.isWon}
            containerStyles={{ flex: 1 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <LabeledInput
            label="Score:"
            onChangeText={score => this.setState({ game: { ...game, score } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
          <LabeledInput
            label="Goals Scored:"
            onChangeText={goalsScored => this.setState({ game: { ...game, goalsScored } })}
            containerStyles={{ flex: 1 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <LabeledInput
            label="Assists:"
            onChangeText={assits => this.setState({ game: { ...game, assits } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
          <LabeledInput
            label="Defended Balls:"
            onChangeText={defendedBalls => this.setState({ game: { ...game, defendedBalls } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
          <LabeledInput
            label="Lost Balls:"
            onChangeText={lostBalls => this.setState({ game: { ...game, lostBalls } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <LabeledInput
            label="Off target:"
            onChangeText={offTargetShots => this.setState({ game: { ...game, offTargetShots } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
          <LabeledInput
            label="On target:"
            onChangeText={onTargetShots => this.setState({ game: { ...game, onTargetShots } })}
            containerStyles={{ flex: 1 }}
            keyboardType="numeric"
          />
        </View>
        <LabeledInput
          label="Take Notes:"
          placeholder="what to improve? try what next?"
          onChangeText={notes => this.setState({ game: { ...game, notes } })}
          multiline
        />
        <Button
          onPress={this.onSubmitPress}
          title="Add Game"
          color="#841584"
          accessibilityLabel="Add Game to list"
        />
        <SuccessFailureMessage status={addGameStatus} />
        <Text>{JSON.stringify(game)}</Text>
      </View>
    );
  }

  onSubmitPress = async () => {
    const { game } = this.state;
    const { navigation } = this.props;

    const user = await getItem('user');
    const res = await addGames(user.userId, [game]);
    const updatedUser = { ...user, games: [...user.games, game] };

    await setItem('user', updatedUser);

    navigation.state.params.refresh(updatedUser);

    if (res.success) {
      navigation.navigate('Home');
    } else {
      this.setState({
        addGameStatus: res.success,
      });
    }
  };
}
