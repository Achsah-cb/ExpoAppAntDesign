import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF2D6',
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
        backgroundColor:'#EDD06A',
        borderColor:'#EDD06A',
        
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontFamily: 'Montserrat',
        fontSize: responsiveWidth(3.5)
    },
    mainText:{
        fontFamily: 'Montserrat',
        fontSize: responsiveWidth(6),
        fontWeight:'700',
        padding:10,
    },
    text:{
        fontSize: responsiveWidth(3),
        fontFamily: 'Montserrat',
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
        color: '#D5912E',
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
    itemText: {
        fontSize:responsiveWidth(8),
        color: '#000',
        textAlign: 'center',
        fontWeight:'600',
        
      },
      scrollpicker: {
        height: responsiveHeight(45),
        width: responsiveWidth(25),
        justifyContent: 'center',
        backgroundColor: '#FCF2D6',
        marginTop:responsiveWidth(6)
      }
  
});

export default styles;