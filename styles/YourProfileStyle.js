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
        alignItems: 'center'
    },
    MainItems: {
        width: responsiveWidth(80),
        height: responsiveHeight(150),
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
    detailsSection: {
        //backgroundColor:'grey',
        width: responsiveWidth(80),
        height: responsiveHeight(60),

    },
    input: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        backgroundColor: 'white',
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(0.3),
        paddingLeft: responsiveWidth(5)

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
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
    },
    label: {
        marginBottom: responsiveHeight(2)
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
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        //padding: 15,
        marginBottom: responsiveHeight(10)
    },
    calenderIcon: {
        position: 'absolute',
        left: responsiveWidth(70),
        top: responsiveHeight(3.8)
    },
    editIcon: {
        position: 'absolute',
        top: responsiveHeight(13),
        left: responsiveWidth(45)
    },
    uploadPhotos: {
        width: responsiveWidth(80),
        height: responsiveHeight(30),

    },
    imageContainer: {
        width: responsiveWidth(80),
        height: responsiveHeight(25),
        flexWrap: "wrap", 
        marginBottom: 20,
        flexDirection: 'row'
    },
    image: {
        width: responsiveWidth(25),
        height: responsiveHeight(12),
        borderRadius: responsiveWidth(2),
        marginRight: responsiveWidth(2),
        aspectRatio:1
    },
    addImages: {
        width: responsiveWidth(25),
        height: responsiveHeight(12),
        borderRadius: responsiveWidth(2),
        marginRight: responsiveWidth(2),
        borderWidth: responsiveWidth(0.4),
        alignItems: 'center',
        justifyContent: 'center',
    },

    dropdown: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        backgroundColor: 'white',
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(0.3),
        
      },
      dropdownText: {
        fontSize:responsiveWidth(3.5),
        margin:responsiveWidth(4),
        height: responsiveHeight(2),
      },
      dropdownMenu: {
        width: responsiveWidth(80),
        height: responsiveHeight(14),
        borderWidth: responsiveWidth(0.3),
        fontSize:responsiveWidth(3.5),
      },
      genderText:{
        fontSize:responsiveWidth(3.5),
      },
      timeText:{
        fontSize:responsiveWidth(3.5),
      },
      dropdownMenuTimes:{
        width: responsiveWidth(80),
        height: responsiveHeight(18),
        borderWidth: responsiveWidth(0.3),
        fontSize:responsiveWidth(3.5),
      }
   
})
export default styles;