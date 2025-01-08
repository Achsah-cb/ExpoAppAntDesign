import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: responsiveWidth(4),
    },
    Input: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(3),
        padding: responsiveWidth(3),
        backgroundColor: 'white',
        marginTop: responsiveWidth(7),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: responsiveWidth(2) },
        shadowOpacity: 0.1,
        shadowRadius: responsiveWidth(2),
        elevation: 10,
    },
    Button: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(3),
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: responsiveWidth(2) },
        shadowOpacity: 0.1,
        shadowRadius: responsiveWidth(2),
        elevation: 5,
        borderWidth:responsiveWidth(0)
    },
    mainText: {
        marginTop: responsiveWidth(15),
    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } }),
        justifyContent: 'space-between',
        width: responsiveWidth(100),
    },
    backBtn: {
        margin: responsiveWidth(6),
        width: responsiveWidth(9),
        height: responsiveHeight(4.5),
        backgroundColor: "#ffffffff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
    },
    progressContainer: {
        alignItems: 'center'
    },
    progressBar: {
        backgroundColor: '#FDE869',
        width: responsiveWidth(80),
        height: responsiveHeight(0.8),
        borderRadius: 50,
    },
    progress: {
        backgroundColor: '#C29225',
        width: responsiveWidth(15),
        height: responsiveHeight(0.8),
        borderRadius: 50
    },
})

export default styles;