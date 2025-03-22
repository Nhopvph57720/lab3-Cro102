import React, { useRef } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const data = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Item ${i}` }));

const ListItem = React.memo(({ item, viewableItems }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((viewableItem) => viewableItem.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.item, rStyle]}>
      <Text>{item.title}</Text>
    </Animated.View>
  );
});

const AnimatedFlatListScreen = () => {
  const viewableItems = useSharedValue([]);

  const onViewableItemsChanged = useRef(({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  });

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />}
      keyExtractor={(item) => item.id}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
});

export default AnimatedFlatListScreen;