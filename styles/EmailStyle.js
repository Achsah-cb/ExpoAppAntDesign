import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FCF2D6'   
    },
    itemContainer:{
       alignItems:'center' ,
       margin:20,
       marginTop:responsiveWidth(4),
          
    },
    Input:{
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        fontSize: responsiveWidth(3.5),
        borderRadius:responsiveWidth(3),
        padding:responsiveWidth(3),
        fontFamily: 'Montserrat',
        backgroundColor:'white',
        borderColor:'#EDD06A',
        borderWidth:1,

        marginTop: responsiveWidth(7),
        
    },
    Button:{
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius:responsiveWidth(3),
        
        backgroundColor:'#EDD06A',
        borderColor:'#EDD06A',
        marginTop:25,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontFamily: 'Montserrat',
        fontSize: responsiveWidth(4)
    },
    mainText:{
        fontSize: responsiveWidth(6),
        fontFamily: 'Montserrat',
        fontWeight:'700',
        padding:10,
    },
    text:{
        fontSize: responsiveWidth(3),
        fontFamily: 'Montserrat',
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
    progressContainer: {
        alignItems: 'center'
    },
    progressBar: {
        backgroundColor: '#FDE869',
        width: responsiveWidth(80),
        height: responsiveHeight(0.8),
        borderRadius: 50,
    },
    progress: {
        backgroundColor: '#C29225',
        width: responsiveWidth(80),
        height: responsiveHeight(0.8),
        borderRadius: 50
    },
})

export default styles;