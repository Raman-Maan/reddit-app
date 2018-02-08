import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import ListItem from '../components/ListItem';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id: 1, author: 'Paul', ups: 1200, title: 'Some Post 1'}, 
        {id: 2, author: 'Kevin', ups: 130, title: 'Some Post 2'},
        {id: 3, author: 'Matt', ups: 1230, title: 'Some Post 3'},
        {id: 4, author: 'Min', ups: 1300, title: 'Some Post 4'},
        {id: 5, author: 'Fujie', ups: 1700, title: 'Some Post 5'},
        {id: 6, author: 'Edson', ups: 1324, title: 'Some Post 6'},
        {id: 7, author: 'Raman', ups: 1, title: 'Some Post 7'}
      ],
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.fetchFromAPI(`https://www.reddit.com/r/${this.props.subreddit}/.json`);
  }

  /**
   * This function we will write during our live demo
   */
  fetchFromAPI = (uri) => {
    // this.setState({loading: true});
    // fetch(uri)
    //   .then(res => res.json())
    //   .then(res => this.setState({ loading: false, data: res.data.children.map(x => x.data) }))
    //   .catch(error => this.setState({ error }));
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
