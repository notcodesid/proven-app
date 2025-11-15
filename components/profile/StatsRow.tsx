import React from 'react';
import { View, StyleSheet } from 'react-native';
import StatBlock from './StatBlock';

type StatsRowProps = {
  completed: number;
  active: number;
  onCompletedPress?: () => void;
  onActivePress?: () => void;
};

export default function StatsRow({
  completed,
  active,
  onCompletedPress,
  onActivePress,
}: StatsRowProps) {
  return (
    <View style={styles.container}>
      <StatBlock
        icon="checkmark-circle"
        value={completed}
        label="Completed"
        onPress={onCompletedPress}
      />
      <StatBlock
        icon="flame"
        value={active}
        label="Active"
        onPress={onActivePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 24,
  },
});
