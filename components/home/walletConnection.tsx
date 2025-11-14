import { View, Text, Pressable, StyleSheet } from "react-native"


export const WalletConnection = () => { 
    return (
        <View>
        <Pressable style={styles.wallet}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Select Wallet</Text>
      </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    wallet: {
        backgroundColor: '#6b46ff',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 10,
      },
})