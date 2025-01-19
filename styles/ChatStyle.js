import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(3),
        backgroundColor: '#F1EEEE',
        padding: responsiveWidth(2),
        borderRadius: responsiveWidth(3)
    },
    profilePic: {
        width: responsiveWidth(20),
        height: responsiveHeight(9.2),
        borderRadius: responsiveWidth(14),
        borderWidth:responsiveWidth(1),
    },
    userProfilePic: {
        width: responsiveWidth(15),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(14),
        marginRight: responsiveWidth(5),
    },
    statusIndicator: {
        width: responsiveWidth(3.5),
        height: responsiveWidth(3.5),
        borderRadius: responsiveWidth(3),
        position: 'relative',
        left: responsiveWidth(6.8),
        bottom: responsiveWidth(5),
        borderColor: "#ffffff",
        borderWidth: responsiveWidth(0.2)
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    menuBtn:  {
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
        margin: responsiveWidth(6),
        backgroundColor: "#ffffffff",
    },
    messageBox: {
        width: responsiveWidth(100),
        height: responsiveHeight(65),//75
        marginBottom: responsiveWidth(-8),
        backgroundColor: '#FFFFFF',
        borderRadius: responsiveWidth(8),
        padding: responsiveWidth(5),
        paddingTop: responsiveWidth(5),
    },
    profileScroll: {
        flexDirection: 'row',
        marginTop:responsiveHeight(5),
        height: responsiveHeight(15),
        width: responsiveWidth(100),
       
    },
    profileContainer: {
        marginHorizontal: responsiveWidth(2.3),
        alignItems: 'center',
    },
    chatTitleText: {
        textAlign:'center',
    },
    dateContainer: {

    },
    dateText: {

    },
    ChatTextContainer:{
        width:responsiveWidth(30),
        height:responsiveHeight(10),
        justifyContent:'center',
    }

});

export default styles;
