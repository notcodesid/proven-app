import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ReadMoreBtnProps = {
  selectedId: string | null;
  onPress: () => void;
};

export default function ReadMoreBtn({ selectedId, onPress }: ReadMoreBtnProps) {
  const insets = useSafeAreaInsets();
  const slide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // when selectedId is not null animate in, else animate out
    Animated.timing(slide, {
      toValue: selectedId ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [selectedId]);

  // translate Y: when hidden -> 120 (below), when visible -> 0
  const translateY = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [120, 0],
  });

  return (
    <Animated.View
      pointerEvents={selectedId ? 'auto' : 'none'}
      style={[
        styles.readMoreWrap,
        {
          transform: [{ translateY }],
          // positioned a bit lower - increased offset from 64 to 80
          bottom: insets.bottom ,
        },
      ]}
    >
      <Pressable onPress={onPress} style={styles.readMoreBtn}>
        <Text style={styles.readText}>Read More</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  readMoreWrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  readMoreBtn: {
    backgroundColor: '#f06767',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 6,
  },
  readText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
});
