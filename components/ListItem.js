import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    const {title, author, thumbnail: img, ups} = this.props.item;
    this.state = {
      title, author, ups,
      img: img ? img : 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png',
    };
  }

  render = () => (
    <View style = {styles.container}>
      <Image
        style = {styles.img}
        source = {{uri: this.state.img}}
      />
      <Text style = {styles.title} numberOfLines = {3}>{this.state.title}</Text>
      <View style = {styles.details}>
        <Text style = {styles.detail_text}>{this.state.ups}</Text>
        <Text style = {styles.detail_text}>{this.state.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    marginBottom: 5,
    padding: 10
  },
  img : {
    width: '100%',
    height: 150
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#eee',
    marginTop: 5
  },
  details: {
    flex: 1,
    flexDirection: 'row',
  },
  detail_text: {
    fontSize: 10,
    color: '#ddd',
    paddingRight: 10
  }
});
