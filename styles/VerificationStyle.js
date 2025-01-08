import { StyleSheet, Dimensions, Platform} from "react-native";
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
        ...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } }),
        justifyContent: 'flex-end',
        width: responsiveWidth(100),
    },
    skipBtn: {
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
        margin: responsiveWidth(6),
    },
    button: {
        width: responsiveWidth(30),
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(5),
        textAlign: 'center',
        margin: responsiveWidth(1),
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 0
        },
        shadowOpacity: 0.2,
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveWidth(10)
    },
    buttonText: {
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: responsiveWidth(95),
        justifyContent: 'center',
        marginTop: responsiveWidth(5)
    },

})

export default styles;