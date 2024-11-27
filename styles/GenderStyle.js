import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const buttonSize = responsiveWidth(40);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FBE7',  
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
         backgroundColor:'#FFB200',
         borderColor:'#FFB200',
        
     },
     buttonText:{
         color:'white',
         fontWeight:'700',
 
         fontSize: responsiveWidth(4)
     },
     mainText:{
         fontSize: responsiveWidth(6),
 
         fontWeight:'500',
         padding:10,
     },
     text:{
         fontSize: responsiveWidth(3),
         marginBottom:responsiveWidth(5)
     },
   
    genderButton:{
        width: buttonSize, 
        height: buttonSize, 
        borderRadius: buttonSize / 2,
        margin:20,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    activeBtn:{
        backgroundColor:'#FFB200',
    },
    header:{
        flexDirection:'row',
        ...Platform.select({ ios :{marginTop:0, }, android :{marginTop:30}}),
    },
    backBtn:{
        margin:responsiveWidth(6),
        width:responsiveWidth(10),
        height:responsiveHeight(5),
    },
    progressBar:{
        backgroundColor:'#FFEC9E',
        width:responsiveWidth(40),
        height:responsiveHeight(1),
        borderRadius:50,
        margin:responsiveWidth(7.5),
    },
    progress:{
        backgroundColor:'#FFB200',
        width:responsiveWidth(19),
        height:responsiveHeight(1),
        borderRadius:50
    }
})

export default styles;