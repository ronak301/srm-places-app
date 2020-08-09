import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_HORIZONTAL_MARGIN = 24;

class PlaceDetail extends React.Component {
  render() {
    const title = this.props.navigation.getParam('title');
    const subtitle = this.props.navigation.getParam('subtitle');
    const imageUrl = this.props.navigation.getParam('illustration');
    return (
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: imageUrl }} />
        <View style={styles.contentCtr}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: width,
  },
  contentCtr: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  subtitle: {
    color: 'rgb(200, 200, 200)',
    fontWeight: '500',
    paddingTop: 4,
    fontSize: 16,
  },
  cardImage: {
    width: width,
    height: 250,
  },
});

export default PlaceDetail;
