import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const selectSize = responsiveWidth(6);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: responsiveWidth(4),
        justifyContent: 'center',
        alignItems: 'center'
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
    skipBtn: {
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
        margin: responsiveWidth(6),
    },
    textContainer: {
        width: responsiveWidth(90),
        marginBottom: responsiveHeight(4),
        alignItems: 'center',
    },
    firstContainer: {
        width:responsiveWidth(80),
        margin:responsiveWidth(3),
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    button: {
        width: responsiveWidth(80),
        height: responsiveHeight(11),
        borderRadius: responsiveWidth(3),
        textAlign: 'center',
        margin: responsiveWidth(1),
        shadowColor: '#FF2A64',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.4,
        shadowRadius:20,
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderWidth: responsiveWidth(0.2),
        borderColor: 'grey',
        flexDirection:'row',
        marginTop:responsiveWidth(5)
    },
    button1: {
        width: responsiveWidth(36),
        height: responsiveHeight(12),
        borderRadius: responsiveWidth(3),
        textAlign: 'center',
        margin: responsiveWidth(1),
        shadowColor: '#26A69A',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        elevation: 6,
        shadowRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: responsiveWidth(0.2),
        borderColor: 'grey'
    },
    button2: {
        width: responsiveWidth(36),
        height: responsiveHeight(12),
        borderRadius: responsiveWidth(3),
        textAlign: 'center',
        margin: responsiveWidth(1),
        shadowColor: '#756EF3',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.4,
        elevation: 6,
        shadowRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: responsiveWidth(0.2),
        borderColor: 'grey'
    },
    buttonText: {
        textAlign: 'center',
        paddingLeft: responsiveWidth(2),
    },
    buttonContainer: {
        alignItems: 'center',
        width: responsiveWidth(90),
        height: responsiveHeight(25),
        justifyContent: 'space-between',

    },

})

export default styles;