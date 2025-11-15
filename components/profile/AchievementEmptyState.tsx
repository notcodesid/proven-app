import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AchievementEmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.iconBadge}>
        <Ionicons name="medal-outline" size={48} color="#d24949" />
      </View>

      <Text style={styles.title}>Achievement Badges</Text>

      <Text style={styles.description}>
        Complete challenges to earn achievement badges.{'\n'}
        Each badge represents a milestone in your journey.{'\n'}
        Start your first challenge today!
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
    paddingVertical: 60,
  },
  iconBadge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#141414',
    borderWidth: 2,
    borderColor: '#d24949',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
    fontWeight: '500',
  },
});
