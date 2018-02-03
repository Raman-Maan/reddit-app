import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchFromAPI('https://www.reddit.com/r/pics/.json');
  }

  fetchFromAPI = (uri) => {
    fetch(uri)
      .then(res => res.json())
      .then(res => this.setState({ data: res.data.children.map(x => x.data)}))
      .catch(error => this.setState({ error }));
  }

  renderListItem = (item) => (
    <ListItem 
      item = {item}
    />
  );

  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          style = {styles.list}
          data = {this.state.data}
          extraData = {this.state.data}
          keyExtractor = {item => item.id}
          renderItem = {({item}) => this.renderListItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
