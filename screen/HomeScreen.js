import React, {useEffect, useState} from 'react';
import Picture from '../components/Picture';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function HomeScreen({navigation, test}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=GJTXMTCy4xxuGcU-LqTj-C-AKxRb04aXknVwFqgPbpw',
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <Text>Ошибка: {error.message}</Text>;
  } else if (!isLoaded) {
    return <Text>Загрузка...</Text>;
  } else {
    return (
      <SafeAreaView style={styles.con}>
        <Picture navigation={navigation} getPicture={items} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    backgroundColor: 456,
    flex: 1,
  },
});
