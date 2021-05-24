import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
function Picture({navigation, getPicture}) {
  const onPress = value => {
    navigation.navigate('Picture', {
      pictureUrl: value.urls.full,
    });
  };
  return (
    <View style={styles.container}>
      {getPicture.map(value => (
        <TouchableWithoutFeedback onPress={() => onPress(value)}>
          <View style={styles.contPicture}>
            <Image
              style={styles.picture}
              source={{
                uri: value.urls.regular,
              }}
            />
            <Text style={styles.name}>{value.user.name}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {value.alt_description}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}
export default Picture;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 456,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contPicture: {
    width: 100,
    marginBottom: 10,
  },
  picture: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  name: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 8,
    color: 'gray',
    textAlign: 'center',
  },
});
