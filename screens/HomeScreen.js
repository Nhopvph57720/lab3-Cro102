import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Bài 1: Di chuyển Box"
        onPress={() => navigation.navigate('MovingBox')}
      />
      <Button
        title="Bài 2: FlatList Animation"
        onPress={() => navigation.navigate('AnimatedFlatList')}
      />
      <Button
        title="Bài 3: Scroll Header"
        onPress={() => navigation.navigate('ScrollHeader')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;