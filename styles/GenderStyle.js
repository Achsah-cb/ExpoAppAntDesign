import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9FBE7'
        
    },
    itemContainer:{
       alignItems:'center' ,
       margin:20,
       marginTop:10
       
    },
    Button:{
        width: 325,
        height: 56,
        borderRadius:20,
        backgroundColor:'#FFB200',
        borderColor:'#FFB200',
        position:'relative',
        ...Platform.select({android:{top:50}, ios:{top:135}})
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    mainText:{
        fontSize:24,
        fontWeight:'500',
        padding:10,
    },
    text:{
        fontSize:14,
        marginBottom:40
    },
    genderButton:{
        width:160,
        height:160,
        borderRadius:100,
        margin:20,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    activeBtn:{
        backgroundColor:'#FFB200',
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
        width:112.5,
        height:8,
        borderRadius:50
    }
})

export default styles;