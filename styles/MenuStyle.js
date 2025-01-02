import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF2D6',
    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 50, }, android: { marginTop: 30 } }),
    },
    backBtn: {
        margin: responsiveWidth(6),
        width: responsiveWidth(10),
        height: responsiveHeight(5),
    },
    settingsBtn: {
        margin: responsiveWidth(6),
        marginLeft: responsiveWidth(65),
        width: responsiveWidth(10),
        height: responsiveHeight(5),
    },
    screen: {
        flex: 1,
        backgroundColor: '#FCF2D6',
        alignItems: 'center',
    },
    profileImage: {
        width: responsiveWidth(25),
        height: responsiveHeight(12),
        borderWidth: 2,
        borderColor: '#C29225',
        borderRadius: responsiveWidth(3)
    },
    nameAndAge: {
        margin: responsiveWidth(3)
    },
    username: {
        fontSize: responsiveWidth(8),
        fontWeight: '600',
        textAlign: 'center'
    },
    userage: {
        fontSize: responsiveWidth(7),
        fontWeight: '600',
        textAlign: 'center'
    },
    premium: {
        margin: responsiveWidth(3),
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        backgroundColor: '#EDD06A',
        borderRadius: responsiveWidth(5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: responsiveWidth(6),
        fontWeight: '600'
    },
    priceLabel: {
        backgroundColor: '#4765F8',
        color: '#ffffff',
        fontWeight: '500'
    },
    containerList: {
        width: responsiveWidth(80),
        height: responsiveHeight(40),
        backgroundColor: '#EAE6E6',
        padding: responsiveWidth(3),
        alignItems: 'center',
        borderRadius: responsiveWidth(5)
    },
    contents: {
        width: responsiveWidth(60),
        height: responsiveHeight(8),
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentText: {
        fontSize: responsiveWidth(4),
        textAlign: 'center',
        margin: responsiveWidth(2)

    }
})
export default styles;