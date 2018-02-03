import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

export default class Home extends React.Component {
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

  componentDidMount() {
    this.fetchFromAPI();
  }

  fetchFromAPI = () => {
    this.setState({loading: true});
    fetch('https://www.reddit.com/r/hiphopheads/.json')
      .then(res => res.json())
      .then(res => this.setState({ loading: false, data: res.data.children.map(x => x.data)}))
      .catch(error => {
        this.setState({ error, loading: false })
      });
  }

  renderListItem = ({title, id}) => (
    <ListItem 
      title = {title}
      id = {id}
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
    backgroundColor: '#fff'
  },
  list: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  }
});
