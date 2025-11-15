import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MyChallenge } from '@/data/data';

type ChallengeCardProps = {
  challenge: MyChallenge;
  onPress: () => void;
};

const ChallengeCard = React.memo(({ challenge, onPress }: ChallengeCardProps) => {
  const isCompleted = challenge.progress === 100;

  return (
    <Pressable
      style={styles.card}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${challenge.title}, ${challenge.progress}% complete, reward ${challenge.reward}`}
      accessibilityHint="Tap to view challenge details"
    >
      <View style={styles.imageContainer}>
        <Image source={challenge.image} style={styles.image} resizeMode="cover" />
        {isCompleted && (
          <View style={styles.completedBadge}>
            <Ionicons name="checkmark-circle" size={24} color="#4ade80" />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {challenge.title}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>
            {challenge.type} • {challenge.difficulty}
          </Text>
        </View>

        {!isCompleted ? (
          <>
            <View style={styles.progressBar}>
              <View
                style={[styles.progressFill, { width: `${challenge.progress}%` }]}
              />
            </View>

            <View style={styles.progressInfo}>
              <Text style={styles.progressText}>{challenge.progress}% complete</Text>
              <Text style={styles.rewardText}>{challenge.reward}</Text>
            </View>
          </>
        ) : (
          <View style={styles.completedInfo}>
            <View style={styles.completedRow}>
              <Ionicons name="trophy" size={16} color="#fbbf24" />
              <Text style={styles.completedText}>Completed</Text>
            </View>
            <Text style={styles.completedDate}>{challenge.completedDate}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
});

ChallengeCard.displayName = 'ChallengeCard';

export default ChallengeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141414',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#222',
    marginHorizontal: 16,
    marginBottom: 14,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#1a1a1a',
    position: 'relative',
    margin: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  completedBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 12,
  },
  content: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 14,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff6a3a',
    borderRadius: 3,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },
  rewardText: {
    fontSize: 13,
    color: '#ff6a3a',
    fontWeight: '700',
  },
  completedInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  completedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  completedText: {
    fontSize: 13,
    color: '#4ade80',
    fontWeight: '600',
  },
  completedDate: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});
