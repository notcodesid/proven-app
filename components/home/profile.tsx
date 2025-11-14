import { Ionicons } from "@expo/vector-icons"
import { View, Text, Pressable, StyleSheet } from "react-native"

export const Profile = () => {
    return (
        <View style={styles.topRow}>
        <View style={styles.profile}>
          <Ionicons name="person-circle" size={36} color="#fff" />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: '#ffd' }}>👋 Hey</Text>
            <Text style={{ color: '#fff', fontWeight: '700' }}>sidharth codes</Text>
          </View>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
    topRow: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      profile: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})