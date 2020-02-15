import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// user choice
// compare computer choice to user choice
// the first one who gets to 3 points wins

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: ['rock', 'paper', 'scissors'],
      computerMove: '',
      userMove: '',
      userPoints: 0,
      computerPoints: 0
    }
  }

  initializeGame() {
    this.generateComputerChoice()
  }

  generateComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    this.state.computerMove = this.state.moves[choice]
    Alert.alert(this.state.computerMove)
  }

  getUserChoice(choice) { 0
    this.state.userMove = choice;

    this.detectWinner()
  }

  detectWinner() {
    let cm = this.state.computerMove;
    let um = this.state.userMove;
    let up = this.state.userPoints;
    let cp = this.state.computerPoints;

    if (cm == um) {
      return 'It is a tie! You both get 0 points.'
    }

    // computer wins
    else if (cm == 'rock' && um == 'scissors' ) { this.setState({computerPoints: cp + 1}) }
    else if (cm == 'paper' && um == 'rock') { this.setState({computerPoints: cp + 1}) }
    else if (cm == 'scissors' && um == 'paper') { this.setState({computerPoints: cp + 1}) }

    // user wins
    else if (cm == 'scissors' && um == 'rock') { this.setState({userPoints: up + 1}) }
    else if (cm == 'rock' && um == 'paper') { this.setState({userPoints: up + 1}) }
    else if (cm == 'paper' && um == 'scissors') { this.setState({userPoints: up + 1}) }

    this.analyzeGame()
  }

  analyzeGame() {
    if (this.state.computerPoints == 3) { Alert.alert('Computer won!') }
    else if (this.state.userPoints == 3) { Alert.alert('User won!') }
    else {
      this.generateComputerChoice()
    }
  }

  // reset game when somebody wins
  resetGame() {
    this.setState({computerPoints: 0})
    this.setState({userPoints: 0})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar}></View>
        <View style={styles.points}>
          <Text>
            { `User points: ${ this.state.userPoints }` }
          </Text>

          <Text>
          { `Computer points: ${ this.state.computerPoints }` }
          </Text>
        </View>

        <View style={styles.choices}>
          <TouchableOpacity style={styles.choice} onPress={() => this.getUserChoice('rock')} >
            <Icon name="hand-rock-o" size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={() => this.getUserChoice('paper')} >
            <Icon name="paper-plane" size={80} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.choice} onPress={() => this.getUserChoice('scissors')} >
            <Icon name="scissors" size={80} />
          </TouchableOpacity>
        </View>

        <Text>{ this.state.userMove }</Text>

        <Text>{ this.state.computerMove }</Text>

        <Button title="Start" onPress={() => this.generateComputerChoice()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {

  },
  choice: {
    padding: 20,
  },
  choices: {
    flexDirection: 'row'
  },
  points: {
    backgroundColor: 'lightgreen',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  statusBar: {
    height: 20,
    backgroundColor: '#fff'
  }
});
