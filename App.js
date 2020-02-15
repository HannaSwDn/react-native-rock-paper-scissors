import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: ['rock', 'paper', 'scissors'],
      points: 0,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.setState({points: 1})} >Rock Paper Scissors - React Native</Text>
        <Text>
          {this.state.points}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
