import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Text } from 'react-native';

function HeaderLeft() {
    return (<Text style={styles.titleText}>Lahelu</Text>)
}

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ headerTitle: HeaderLeft, headerTitleAlign: "left" }} />
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#65a4ec",
        textShadowColor: "#000000",
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 2
    }
})