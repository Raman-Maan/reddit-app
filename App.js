import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import ListItem from './components/ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchFromAPI('https://www.reddit.com/r/pics/.json');
  }

  fetchFromAPI = (uri) => {
    this.setState({loading: true});
    fetch(uri)
      .then(res => res.json())
      .then(res => this.setState({ loading: false, data: res.data.children.map(x => x.data)}))
      .catch(error => this.setState({ error }));
  }

  renderListItem = (item) => (<ListItem item = {item}/>);

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#FFF'/>
        </View>
      )
    }

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
  loading: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
