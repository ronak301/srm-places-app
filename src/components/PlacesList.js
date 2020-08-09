import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Card from './Card';

const LoadingComponent = () => {
  return <ActivityIndicator size={'large'} />;
};

class PlacesList extends React.Component {
  constructor() {
    super();
    this.state = {
      placesData: [],
      isLoading: false,
      animationValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.fetchPlaces();
  }

  fetchPlaces = () => {
    this.setState({
      isLoading: true,
    });
    fetch('https://api.jsonbin.io/b/5f2a88476f8e4e3faf2ba365', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'secret-key':
          '$2b$10$eZ/ZJxj/nlEM46WvSBQyouOf9ACBNbzskYtxrDZYeNKs/M1k3FfF6',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.animate();
        this.setState({
          isLoading: false,
          placesData: data.places,
        });
      });
  };

  renderItem = ({ item }) => {
    return (
      <Card
        title={item.title}
        subtitle={item.subtitle}
        imageUrl={item.illustration}
        onPressCard={() => this.onPressCard(item)}
      />
    );
  };

  onPressCard = (item) => {
    this.props.navigation.navigate('placeDetail', { ...item });
  };

  animate = () => {
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <Animated.View style={[styles.container]}>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <Animated.FlatList
            style={{ opacity: this.state.animationValue }}
            keyExtractor={(item) => item.placeId}
            data={this.state.placesData}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlacesList;
