import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const CARD_HORIZONTAL_MARGIN = 24;

class Card extends React.Component {
  render() {
    const { title, subtitle, imageUrl, onPressCard } = this.props; // es6
    return (
      <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContainer}>
          <Image style={styles.cardImage} source={{ uri: imageUrl }} />
          <View style={styles.contentCtr}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: width - 2 * CARD_HORIZONTAL_MARGIN,
    borderRadius: 8,
    marginTop: 20,
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
    width: width - 2 * CARD_HORIZONTAL_MARGIN,
    height: 150,
    borderRadius: 8,
  },
});

export default Card;
