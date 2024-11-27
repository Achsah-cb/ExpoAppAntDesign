import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const selectSize = responsiveWidth(6);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
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
     },
     text2:{
        fontSize: responsiveWidth(3),
        marginBottom:responsiveWidth(5)
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
        width:responsiveWidth(25),
        height:responsiveHeight(1),
        borderRadius:50
    },
    itemText:{
        width: responsiveWidth(85),
        height: responsiveHeight(8),
        backgroundColor:'white',
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(3),
        paddingTop:responsiveWidth(4.5),
        paddingLeft:responsiveWidth(4),
        fontSize:responsiveWidth(3.5),
        fontWeight:'400',
        
    },
    selectedItem:{
        borderColor:'#FFB200',
        borderWidth:2,
        fontWeight:'600'
    },
    items:{
        marginTop:responsiveWidth(5)
    },
    itemsSection:{
        flexDirection:'row',
        marginLeft:1
    },
    selection:{
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        right:responsiveWidth(15),
    },
    itemCircle:{
        width:selectSize,
        height:selectSize,
        borderRadius:selectSize/2,
        borderColor:'#999999',
        borderWidth:responsiveWidth(0.2),
    },    
    selectedItemCircle:{
        borderColor:'#FFB200',
        borderWidth:responsiveWidth(0.8),
    }
})

export default styles;