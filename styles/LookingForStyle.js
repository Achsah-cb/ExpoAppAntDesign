import { StyleSheet, Platform } from "react-native";

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
    Button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        marginTop: 25,
        position: 'relative',
        ...Platform.select({ android: { top: 60 }, ios: { top: 145 } })
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
        width: 135,
        height: 8,
        borderRadius: 50
    },
    itemText:{
        width:325,
        height:64,
        backgroundColor:'white',
        margin:15,
        borderRadius:20,
        padding:18,
        fontSize:16,
        fontWeight:'400',

    },
    selectedItem:{
        borderColor:'#FFB200',
        borderWidth:2,
        fontWeight:'600'
    },
    items:{
        marginTop:10
    },
    itemsSection:{
        flexDirection:'row',
        marginLeft:10
    },
    itemCircle:{
        width:24,
        height:24,
        borderColor:'#999999',
        borderWidth:1,
        borderRadius:100,
        position:'relative',
        right:60,
        top:35
    },
    selectedItemCircle:{
        borderColor:'#FFB200',
        borderWidth:5
    }
})

export default styles;