import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import ListItem from '../components/ListItem';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchFromAPI(`https://www.reddit.com/r/${this.props.subreddit}/.json`);
  }

  fetchFromAPI = (uri) => {
    this.setState({loading: true});
    fetch(uri)
      .then(res => res.json())
      .then(res => this.setState({ loading: false, data: res.data.children.map(x => x.data) }))
      .catch(error => this.setState({ error }));
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color='#FFF'/>
        </View>
      )
    }

    return (
      <FlatList
          style = {styles.list}
          data = {this.state.data}
          extraData = {this.state.data}
          keyExtractor = {item => item.id}
          renderItem = {({item}) => (<ListItem item = {item}/>)}
        />
    );
  }
}

const styles = StyleSheet.create({
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
