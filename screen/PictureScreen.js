import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';

function ProfileScreen({navigation, route}) {
  const {pictureUrl} = route.params;
  return (
    <View style={styles.contPicture}}>
      <Image
        style={styles.picture}
        source={{
          uri: pictureUrl,
        }}
      />
    </View>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  picture: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  contPicture: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
});
