import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;


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
    button:{
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
        width:responsiveWidth(32),
        height:responsiveHeight(1),
        borderRadius:50
    },
    continuebtn:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
        padding:15
     },
    grid: { 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center" 
    },
    interest: {
        backgroundColor:'white',
        borderRadius: responsiveWidth(3),
        padding: 15,
        margin:responsiveWidth(1),
        alignItems: "center",
        flexDirection:'row',
        width:responsiveWidth(40),
        height:responsiveHeight(8),
        alignItems:'center',
        marginTop:responsiveWidth(2)
    },
    selected:{
        backgroundColor:'#FFB200'
    },
    selectedText:{
        color:'white',
        fontWeight:'500'
    },
    interestText:{
        paddingLeft:10,
        fontSize:responsiveWidth(4)
    }
})

export default styles;