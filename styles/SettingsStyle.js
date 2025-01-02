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
    containerItems: {
        flex: 1,
        alignItems: 'center'
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
    mainInfo: {
        width: responsiveWidth(80),
        height: responsiveHeight(20),
        backgroundColor: '#EAE6E6',
        marginTop: responsiveWidth(8),
        borderRadius: responsiveWidth(5)
    },
    mainInfoText: {
        fontSize: responsiveWidth(4),
        margin: responsiveWidth(3),
        fontWeight: '600',
    },
    email: {
        width: responsiveWidth(75),
        height: responsiveHeight(5.5),
        backgroundColor: '#ffffff',
        marginBottom: responsiveWidth(3),
        marginLeft: responsiveWidth(2),
        borderRadius: responsiveWidth(3),
        flexDirection: 'row',
        padding: responsiveWidth(3),
    },
    phone: {
        width: responsiveWidth(75),
        height: responsiveHeight(5.5),
        backgroundColor: '#ffffff',
        marginBottom: responsiveWidth(3),
        marginLeft: responsiveWidth(2),
        borderRadius: responsiveWidth(3),
        flexDirection: 'row',
        padding: responsiveWidth(3)
    },
    inputText: {
        width:responsiveWidth(30),
        height:responsiveHeight(5),
        marginLeft: responsiveWidth(18),
        color: '#ADABAB',
        bottom:responsiveWidth(2),
    },
    notification: {
        width: responsiveWidth(80),
        height: responsiveHeight(15),
        backgroundColor: '#EAE6E6',
        marginTop: responsiveWidth(8),
        borderRadius: responsiveWidth(5)
    },
    notificationText: {
        fontSize: responsiveWidth(4),
        margin: responsiveWidth(3),
        fontWeight: '600'
    },
    pushNotification: {
        flexDirection: 'row',
        width: responsiveWidth(75),
        height: responsiveHeight(5.5),
        backgroundColor: '#ffffff',
        marginLeft: responsiveWidth(2),
        padding: responsiveWidth(3),
        borderRadius: responsiveWidth(3)
    },
    switch: {
        transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 15,
        marginLeft: responsiveWidth(28),
        bottom: responsiveWidth(1)
    },
    moreDetails: {
        width: responsiveWidth(80),
        height: responsiveHeight(18),
        backgroundColor: '#EAE6E6',
        marginTop: responsiveWidth(8),
        borderRadius: responsiveWidth(5),
        flexDirection: 'row'
    },
    moreDetailsText: {
        fontSize: responsiveWidth(4),
        margin: responsiveWidth(3),
        fontWeight: '600',
    },
    arrowIcon: {
        marginLeft: responsiveWidth(40),
        fontSize: responsiveWidth(6)
    },
    textStyle:{
        fontSize:responsiveWidth(4),
        fontWeight:'600'
    },


})
export default styles;