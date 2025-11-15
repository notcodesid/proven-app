import { View, Text, StyleSheet, Image } from "react-native"

export const Profile = () => {
    return (
        <View style={styles.topRow}>
        <View style={styles.profile}>
        <Image
          source={{ uri: "https://pbs.twimg.com/profile_images/1981777608850149376/8z65B1zT_400x400.jpg" }}
          style={{ width: 36, height: 36, borderRadius: 18 }}
        />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: '#ffd' }}>👋 hi</Text>
            <Text style={{ color: '#fff' }}>sidharth</Text>
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