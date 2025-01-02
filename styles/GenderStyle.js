import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const buttonSize = responsiveWidth(40);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FCF2D6',  
    },
    itemContainer:{
        alignItems:'center' ,
        margin:20,
        marginTop:responsiveWidth(4),
           
     },
     continuebtn:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
        padding:15
     },
     Button:{
         width: responsiveWidth(90),
         height: responsiveHeight(7),
         borderRadius:responsiveWidth(3),
         backgroundColor:'#EDD06A',
         borderColor:'#EDD06A', 
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
         marginBottom:responsiveWidth(5),
         fontFamily: 'Montserrat',
     },
   
    genderButton:{
        width: buttonSize, 
        height: buttonSize, 
        borderRadius: buttonSize / 2,
        margin:20,
        backgroundColor:'#EDD06A',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000000',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.2,
        elevation:10
    },
    activeBtn:{
        backgroundColor:'#C29225',
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