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
        alignItems:'center',
    },
    button: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(3),
        textAlign: 'center',
        margin: responsiveWidth(1),
        // shadowColor: '#000000',
        // shadowOffset: {
        //     width: 10,
        //     height: 0
        // },
        // shadowOpacity: 0.2,
        // elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderWidth:responsiveWidth(0.2),
        borderColor:'grey'
    },
    buttonText: {
        textAlign: 'center',
        paddingLeft:responsiveWidth(2),
    },
    buttonContainer: {
        alignItems:'center',
        width: responsiveWidth(90),
        height:responsiveHeight(25),
        justifyContent: 'space-between',

    },

})

export default styles;