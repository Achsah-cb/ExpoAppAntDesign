import { StyleSheet, Platform, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
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
    headerTitle: {
        width: responsiveWidth(57),
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainItems: {
        width: responsiveWidth(80),
        height: responsiveHeight(80),
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'grey',
        marginHorizontal: responsiveWidth(10)
    },
    profilePicture: {
        width: responsiveWidth(80),
        height: responsiveWidth(40),
        alignItems: 'center',

    },
    profileImage: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        borderRadius: responsiveWidth(30) / 2,
        margin: responsiveHeight(3),
        resizeMode: 'cover',
        borderWidth: responsiveWidth(0.1)
    },
    username: {

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
        shadowRadius: 20,
        elevation: 6,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin: responsiveWidth(8)
    },
    options: {
        width: responsiveWidth(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: responsiveWidth(2),
        paddingTop: responsiveWidth(2),
        textAlign: 'left'
    },
    text: {
        width: responsiveWidth(55),

    },

})
export default styles;