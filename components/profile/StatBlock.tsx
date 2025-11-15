import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type StatBlockProps = {
  icon: keyof typeof Ionicons.glyphMap;
  value: number;
  label: string;
  onPress?: () => void;
};

export default function StatBlock({ icon, value, label, onPress }: StatBlockProps) {
  const content = (
    <>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={24} color="#FF5757" />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </>
  );

  if (onPress) {
    return (
      <Pressable
        style={styles.container}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${value} ${label}`}
        accessibilityHint={`View ${label.toLowerCase()} challenges`}
      >
        {content}
      </Pressable>
    );
  }

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    color: '#888',
    fontWeight: '600',
  },
});
