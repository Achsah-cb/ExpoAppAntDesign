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
        marginTop:responsiveWidth(4),    
     },
    buttonContainer: {
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
    ageItem: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageText: {
        fontSize: 48,
        color: '#333',
        opacity:0.5
    },
    selectAgeText: {
        height:80,
        color: '#FFB200',
        fontSize: 64,
        fontWeight: 'bold',
        opacity:1,
        borderBlockColor:'#FFB200', 
    },
    selectAgeItem:{
        padding:40
    },
    flatListStyle: {
        height:400,
        marginTop: responsiveWidth(10),
        marginBottom:responsiveWidth(20)
    },
    listContainer: {
        alignItems: 'center',
        paddingVertical: 150, 
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
        width:responsiveWidth(13),
        height:responsiveHeight(1),
        borderRadius:50
    },
    selectionArrow:{
        position:'relative',
        top:"40%",
        right:60,
    }
  
});

export default styles;