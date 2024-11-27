import { StyleSheet, Platform , Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FBE7",
    },
    itemContainer: {
        alignItems: "center",
        margin: 20,
        marginTop: 10,
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
        width:responsiveWidth(40),
        height:responsiveHeight(1),
        borderRadius:50
    },
    continuebtn:{
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
        padding:15
    },
    uploadContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: responsiveWidth(2),
    },
    addButton: {
        width: responsiveWidth(38),
        height: responsiveHeight(18),
        margin: 10,
        borderColor: "#FFB200",
        borderWidth: 2,
        borderRadius: 15,
        borderStyle: "dashed",
        justifyContent: "center",
        alignItems: "center",
    },
    thumbnail: {
        width: responsiveWidth(36),
        height: responsiveHeight(17),
        borderRadius: 10,
    },
});

export default styles;