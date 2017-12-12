import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>News</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});