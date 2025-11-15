import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type EmptyStateProps = {
  type: 'active' | 'completed';
};

export default function EmptyState({ type }: EmptyStateProps) {
  const isActive = type === 'active';

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons
          name={isActive ? 'hourglass-outline' : 'trophy-outline'}
          size={64}
          color="#444"
        />
      </View>

      <Text style={styles.title}>
        {isActive ? 'No Active Challenges' : 'No Completed Challenges Yet'}
      </Text>

      <Text style={styles.subtitle}>
        {isActive
          ? 'Start a new challenge to see it here'
          : 'Complete your active challenges to see them here'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 80,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
  },
});
