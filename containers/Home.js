import React from 'react';
import { StyleSheet, View } from 'react-native';

import SubredditView from '../components/SubredditView';

export default class Home extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <SubredditView subreddit = "pics"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  }
});
