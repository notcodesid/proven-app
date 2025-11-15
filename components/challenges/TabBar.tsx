import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated, LayoutChangeEvent } from 'react-native';

type Tab = 'active' | 'completed';

type TabBarProps = {
  selectedTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export default function TabBar({ selectedTab, onTabChange }: TabBarProps) {
  const underlineAnim = useRef(new Animated.Value(0)).current;
  const [tabWidth, setTabWidth] = useState(0);

  useEffect(() => {
    Animated.spring(underlineAnim, {
      toValue: selectedTab === 'active' ? 0 : 1,
      useNativeDriver: true,
      tension: 80,
      friction: 10,
    }).start();
  }, [selectedTab]);

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setTabWidth(width / 2); // Half the container width
  };

  const underlineTranslateX = underlineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, tabWidth],
  });

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.tabsRow}>
        <Pressable
          style={styles.tab}
          onPress={() => onTabChange('active')}
          accessibilityRole="tab"
          accessibilityLabel="Active challenges tab"
          accessibilityState={{ selected: selectedTab === 'active' }}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'active' && styles.tabTextActive,
            ]}
          >
            Active
          </Text>
        </Pressable>

        <Pressable
          style={styles.tab}
          onPress={() => onTabChange('completed')}
          accessibilityRole="tab"
          accessibilityLabel="Completed challenges tab"
          accessibilityState={{ selected: selectedTab === 'completed' }}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === 'completed' && styles.tabTextActive,
            ]}
          >
            Completed
          </Text>
        </Pressable>
      </View>

      {/* Animated underline */}
      <View style={styles.underlineTrack}>
        <Animated.View
          style={[
            styles.underline,
            {
              width: tabWidth,
              transform: [{ translateX: underlineTranslateX }],
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabsRow: {
    flexDirection: 'row',
  },
  tab: {
    paddingVertical: 12,
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  underlineTrack: {
    height: 3,
    marginTop: 2,
    position: 'relative',
  },
  underline: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#d24949',
    borderRadius: 2,
  },
});
