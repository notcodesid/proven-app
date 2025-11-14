// ChallengeCard.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Challenge } from '@/data/data';

type Props = {
  item: Challenge;
  selected: boolean;
  onPress: (id: string) => void;
  onFabPress?: (e: GestureResponderEvent) => void;
};

export default function ChallengeCard({ item, selected, onPress, onFabPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.id)}
      style={[styles.card, selected && styles.cardSelected]}
    >
      <View style={styles.imageWrap}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        {/* small badge on the top right */}
        <View style={styles.topBadge}>
          <Text style={styles.topBadgeText}>Daily completion</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.dateRange}</Text>

        <View style={styles.chipsRow}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{item.entryFee}</Text>
          </View>
          <View style={styles.chip}>
            <Ionicons name="calendar" size={14} color="#bbb" />
            <Text style={[styles.chipText, { marginLeft: 6 }]}>{item.days} days</Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaBox}>
            <Text style={styles.metaLabel}>PRIZE POOL</Text>
            <Text style={styles.metaValue}>{item.prizePool}</Text>
          </View>

          <View style={styles.metaBox}>
            <Text style={styles.metaLabel}>PARTICIPANTS</Text>
            <Text style={styles.metaValue}>{item.participants}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginTop: 18,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#111',
    borderWidth: 0,
    // subtle shadow (android/elev)
    elevation: 2,
  },
  cardSelected: {
    borderColor: '#ff6b6b33',
    borderWidth: 2,
  },
  imageWrap: {
    height: 180,
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#ff7b7b',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 18,
  },
  topBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 18,
    top: 110,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ff7b7b',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  content: {
    padding: 16,
    backgroundColor: '#151515',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  date: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 10,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    color: '#ddd',
    fontSize: 13,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  metaBox: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  metaLabel: {
    color: '#777',
    fontSize: 12,
    marginBottom: 8,
  },
  metaValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});