import { StyleSheet, Platform} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop: 10,
        
    },
    button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        marginTop: 25,
        position: 'relative',
        ...Platform.select({ android: { top: 55 }, ios: { top: 145 } })
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText: {
        fontSize: 24,
        fontWeight: '500',
        padding: 10,
    },
    text: {
        fontSize: 14,
    },
    backBtn: {
        margin: 20,
        width: 40,
        height: 40,

    },
    header: {
        flexDirection: 'row',
        ...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } })
    },
    progressBar: {
        backgroundColor: '#FFEC9E',
        width: 180,
        height: 8,
        borderRadius: 50,
        margin: 30
    },
    progress: {
        backgroundColor: '#FFB200',
        width: 160,
        height: 8,
        borderRadius: 50
    },
    grid: { 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center" 
    },
    interest: {
        backgroundColor:'white',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        width: "30%",
        alignItems: "center",
        flexDirection:'row',
        width: 150,
        alignItems:'center'
        
    },
    selected:{
        backgroundColor:'#FFB200'
    },
    selectedText:{
        color:'white',
        fontWeight:'500'
    },
    interestText:{
        paddingLeft:10
    }
})

export default styles;