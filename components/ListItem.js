import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.id}</Text>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee'
  },
});
