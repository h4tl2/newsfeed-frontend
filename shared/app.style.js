import { StyleSheet } from 'react-native';

export const rootStyle = StyleSheet.create({
    headerStyle: {
        height: 0,
        backgroundColor: "#FFF",
        borderBottomWidth: 0,
        paddingBottom: 5
    },
    headerBG: {
        backgroundColor: "#FFF"
    },
    headerText: {
        color: "#005EEB",
        fontSize: 24,
        padding: 8,
        fontWeight: 'bold'
    },
    headerPadder: {
        paddingVertical: 8
    },
    tabIconFocused: {
        color: "#4D89F2"
    },
    contentPadder: {
        padding: 10
    }
});

export const variableStyle = {
    tabIcon: "#555",
    tabIconFocused: "#4D89F2",
    tabIconSize: 22
}