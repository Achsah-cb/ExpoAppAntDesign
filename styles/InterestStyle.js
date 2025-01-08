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
        flex: 1,
        paddingBottom: responsiveWidth(5),
    },
    button: {
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
        padding: responsiveWidth(5),
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
        borderRadius: responsiveWidth(2)
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
        width: responsiveWidth(60),
        height: responsiveHeight(0.8),
        borderRadius: 50
    },
    continuebtn: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: responsiveWidth(1),
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        flex: 1,
    },
    interestSection: {
        width: responsiveWidth(95),
        height: responsiveHeight(15),
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: responsiveWidth(10),
    },
    titleText: {
        marginTop: responsiveWidth(6),
        marginLeft: responsiveWidth(5),
    },
    interest: {
        backgroundColor: 'white',
        borderRadius: responsiveWidth(5),
        padding: 15,
        margin: responsiveWidth(1),
        alignItems: "center",
        flexDirection: 'row',
        height: responsiveHeight(5.5),
        width: responsiveWidth(42),
        marginTop: responsiveWidth(2),
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#EDD06A',
    },
    interestText: {
        paddingLeft: responsiveWidth(2),
        flexWrap: 'wrap',
    },
    scrollview: {
        ...Platform.select({ ios: { paddingBottom: responsiveWidth(110) }, android: { paddingBottom: responsiveWidth(116) } }),
        marginTop: responsiveWidth(2)
    },
    selectOf: {
        position: 'relative',
        ...Platform.select({ ios: { top: responsiveWidth(60) }, android: { top: responsiveWidth(65) } }),
        left: responsiveWidth(72)
    }
});

export default styles;
