import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: "center",
        margin: 20,
        marginTop: 10,
    },
    Button: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(4),
        marginTop: 25,
        shadowColor: '#FF2A64',
        shadowOffset: { width: 0, height: responsiveWidth(2) },
        shadowOpacity: 0.3,
        shadowRadius: responsiveWidth(4),
        elevation: 10,
        borderWidth: responsiveWidth(0)
    },
    textContainer: {
        marginTop: responsiveWidth(15),
        width: responsiveWidth(80),
        marginBottom: responsiveHeight(4)
    },
    header: {
        flexDirection: 'row',
        //...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } }),
        justifyContent: 'space-between',
        width: responsiveWidth(100),
    },
    backBtn: {
        margin: responsiveWidth(6),
        width: responsiveWidth(9),
        height: responsiveHeight(3),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
    },
    progressContainer: {
        alignItems: 'center'
    },
    progressBar: {
        //backgroundColor: '#FDE869',
        width: responsiveWidth(80),
        height: responsiveHeight(1),
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progress: {
        backgroundColor: '#D9D9D9',
        width: responsiveWidth(10),
        height: responsiveHeight(1),
        borderRadius: 50
    },
    skipBtn: {
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
        margin: responsiveWidth(6),
    },
    progressContainer: {
        alignItems: 'center'
    },
    continuebtn: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 15
    },
    uploadContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: responsiveWidth(2),
    },
    addButton: {
        backgroundColor: '#ffffff',
        width: responsiveWidth(22),
        height: responsiveHeight(10),
        margin: 10,
        borderColor: "#FF2A64",
        borderWidth: 1,
        borderRadius: 15,
        borderStyle: 'dashed',
        justifyContent: "center",
        alignItems: "center",
    },
    BigAddButton: {
        backgroundColor: '#ffffff',
        width: responsiveWidth(46),
        height: responsiveHeight(22),
        margin: 10,
        borderColor: "#FF2A64",
        borderWidth: 1,
        borderRadius: 15,
        borderStyle: 'dashed',
        justifyContent: "center",
        alignItems: "center",
    },
    rightSideBtns: {
        marginLeft: responsiveWidth(2)

    },
    bottomSideBtns: {

        flexDirection: 'row'
    },
    thumbnail: {
        width: responsiveWidth(20),
        height: responsiveHeight(9),
        borderRadius: 10,
    },
    bigThumbnail: {
        width: responsiveWidth(44),
        height: responsiveHeight(21),
        borderRadius: 10,
    },


});

export default styles;