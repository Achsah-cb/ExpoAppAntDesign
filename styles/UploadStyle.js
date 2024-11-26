import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBE7",
    },
    itemContainer: {
        alignItems: "center",
        margin: 20,
        marginTop: 10,
    },
    button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: "#FFB200",
        borderColor: "#FFB200",
        marginTop: 25,
        position: 'relative',
        ...Platform.select({ android: { top: 40 }, ios: { top: 240 } })
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText: {
        fontSize: 24,
        fontWeight: "500",
        padding: 10,
    },
    text: {
        fontSize: 14,
        textAlign: "center",
    },
    backBtn: {
        margin: 20,
        width: 40,
        height: 40,
    },
    header: {
        flexDirection: "row",
        marginTop: Platform.OS === "ios" ? 0 : 30,
    },
    progressBar: {
        backgroundColor: "#FFEC9E",
        width: 180,
        height: 8,
        borderRadius: 50,
        margin: 30,
    },
    progress: {
        backgroundColor: "#FFB200",
        width: 180,
        height: 8,
        borderRadius: 50,
    },
    uploadContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 50,
    },
    addButton: {
        width: 100,
        height: 100,
        margin: 10,
        borderColor: "#FFB200",
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center",
    },
    thumbnail: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
});

export default styles;