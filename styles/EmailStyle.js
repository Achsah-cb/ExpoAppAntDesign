import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FBE7'   
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

        backgroundColor:'white',
        borderColor:'#FFB200',
        borderWidth:1,

        marginTop: responsiveWidth(7),
        
    },
    Button:{
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius:responsiveWidth(3),
        
        backgroundColor:'#FFB200',
        borderColor:'#FFB200',
        marginTop:25,
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
        width:responsiveWidth(9),
        height:responsiveHeight(1),
        borderRadius:50
    }
})

export default styles;