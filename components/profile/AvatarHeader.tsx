import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

type AvatarHeaderProps = {
  name: string;
  email: string;
  avatar: any;
  onEditPress: () => void;
};

export default function AvatarHeader({ name, email, avatar, onEditPress }: AvatarHeaderProps) {
  return (
    <View style={styles.container}>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarRing}>
          <Image source={avatar} style={styles.avatar} />
        </View>
      </View>

      {/* Name & Email */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 24,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatarRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#d24949',
    padding: 4,
    backgroundColor: '#0f0f10',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
  },
});
