import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBE497',
    },
    userItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(3),
        backgroundColor:'#F1EEEE',
        padding:responsiveWidth(2),
        borderRadius:responsiveWidth(3)
    },
    profilePic: {
        width: responsiveWidth(25),
        height: responsiveHeight(11.4),
        borderRadius: responsiveWidth(14),
    },
    userProfilePic:{
        width: responsiveWidth(15),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(14),
        marginRight: responsiveWidth(5),
    },
    userName: {
        fontSize: responsiveWidth(4),
        fontWeight: 'bold',
        fontFamily:'Montserrat'
    },
    status: {
        fontSize: responsiveWidth(3),
        fontFamily:'Montserrat'
    },
    statusIndicator:{
        width:responsiveWidth(3.5),
        height:responsiveWidth(3.5),
        borderRadius:responsiveWidth(3),
        position:'relative',
        left:responsiveWidth(6.8),
        bottom:responsiveWidth(5),
        borderColor:"#ffffff",
        borderWidth:responsiveWidth(0.2)
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 40 }, android: { marginTop: 30 } }),
        height:responsiveHeight(9)
    },
    backBtn: {
        margin: responsiveWidth(6),
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        backgroundColor:"#ffffffff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:responsiveWidth(2)
    },
    menuBtn: {
        margin: responsiveWidth(6),
        marginLeft: responsiveWidth(54),
        width: responsiveWidth(10),
        height: responsiveHeight(4.5),
        backgroundColor:"#ffffffff",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:responsiveWidth(2)
    },
    messageBox: {
        width: responsiveWidth(100),
        height: responsiveHeight(65),//75
        marginBottom: responsiveWidth(5),
        backgroundColor: '#FFFFFF',
        borderRadius: responsiveWidth(8),
        padding: responsiveWidth(5),
        paddingTop: responsiveWidth(10),
    },
    profileScroll: {
        flexDirection: 'row',
        backgroundColor: '#FBE497',
        height: responsiveHeight(10),
        width: responsiveWidth(100),
    },
    profileContainer: {
        marginHorizontal: responsiveWidth(1),
        alignItems: 'center',
    },
    chatTitleText:{
        position:"relative",
        top:responsiveWidth(8),
        left:responsiveWidth(23),
        fontSize:responsiveWidth(4),
        fontWeight:"700",
        fontFamily:'Montserrat'
    }

});

export default styles;
