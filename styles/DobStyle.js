import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBE7',
    },
    itemContainer: {
        alignItems: 'center',
        margin: 20,
        marginTop:10
    },
    buttonContainer: {
        width: '100%',
        height: 190,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Button: {
        width: 325,
        height: 56,
        borderRadius: 20,
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        position:'relative',
        ...Platform.select({android:{top:-30}, ios:{top:45}})
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
    ageItem: {
        height: 50,
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
        padding:40,
        paddingBottom:30
    },
    flatListStyle: {
        ...Platform.select({ ios: {height:280, marginTop: 80,}, android:{height:280, marginTop: 75,}})
    },
    listContainer: {
        alignItems: 'center',
        ...Platform.select({ ios:{paddingVertical: 100, },  android:{paddingVertical: 90, }})
        
    },
    backBtn:{
        margin:20,
        width:40,
        height:40, 
    },
    header:{
        flexDirection:'row',
        ...Platform.select({ ios :{marginTop:0, }, android :{marginTop:30}})
    },
    progressBar:{
        backgroundColor:'#FFEC9E',
        width:180,
        height:8,
        borderRadius:50,
        margin:30
    },
    progress:{
        backgroundColor:'#FFB200',
        width:90,
        height:8,
        borderRadius:50
    },
    selectionArrow:{
        position:'relative',
        top:235,
        right:60,

    }
  
});

export default styles;