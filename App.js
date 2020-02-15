import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// computer choice generation
// user choice
// compare computer choice to user choice
// the first one who gets to 3 points wins

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      computerMoves: ['rock', 'paper', 'scissors'],
      userMove: '',
      userPoints: 0,
      computerPoints: 0,
    }
  }

  initializeGame() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.choice} onPress={() => this.setState({ userMove: 'rock' })} >
            <Icon name="hand-rock-o" size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={() => this.setState({ userMove: 'paper' })} >
            <Icon name="paper-plane" size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={() => this.setState({ userMove: 'scissors' })} >
            <Icon name="scissors" size={80} />
          </TouchableOpacity>
        </View>

        <Text> { this.state.userMove } </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  choice: {
    padding: 20,
  },
  choices: {
    flexDirection: 'row'
  }
});
