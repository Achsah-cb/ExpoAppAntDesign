import { StyleSheet, Platform, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const selectSize = responsiveWidth(6);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF2D6',
        justifyContent:'center',
        alignItems:'center'
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: responsiveWidth(4),
        
    },
    button: {
        width: responsiveWidth(45),
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(5),
        backgroundColor: '#EDD06A',
        borderColor: '#EDD06A',
        textAlign:'center',
        margin:responsiveWidth(2),
        shadowColor:'#000000',
        shadowOffset:{
            width:10,
            height:0
        },
        shadowOpacity:0.2,
        elevation:6
    },
    buttonText: {
        color: '#000000',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        fontSize: responsiveWidth(5),
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:responsiveWidth(95),
        justifyContent:'center',
        marginTop:responsiveWidth(5)
    },
    mainText: {
        fontSize: responsiveWidth(6),
        fontFamily: 'Montserrat',
        fontWeight: '700',
        color:'#373737',
    }
    
})

export default styles;