import React, { useRef } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i}` }));

const ScrollHeaderScreen = () => {
  const scrollY = useSharedValue(0);

  const headerStyles = useAnimatedStyle(() => {
    return {
      height: withSpring(Math.max(100, 200 - scrollY.value)),
      opacity: withSpring(Math.max(0.5, 1 - scrollY.value / 200)),
      transform: [
        {
          scale: withSpring(Math.max(0.8, 1 - scrollY.value / 200)),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, headerStyles]}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
        <Text style={styles.title}>Header Title</Text>
      </Animated.View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
});

export default ScrollHeaderScreen;