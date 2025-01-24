import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
        paddingBottom: responsiveWidth(0),
        height:responsiveHeight(22),
        //backgroundColor:'grey',
    },
    Input: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(3),
        paddingLeft: responsiveWidth(13),
        backgroundColor: 'white',
        marginTop: responsiveWidth(0),
        borderWidth: responsiveWidth(0.1),
        borderColor: '#909090',
        // ...Platform.select({
        //     ios: {
        //         shadowColor: '#000',
        //         shadowOffset: { width: 0, height: responsiveWidth(2) },
        //         shadowOpacity: 0.1,
        //         shadowRadius: responsiveWidth(2),
        //     },
        //     android: {
        //         elevation: 10,
        //     }
        // })
    },
    Button: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(4),
        marginTop: 25,
        shadowColor: '#FF2A64',
        shadowOffset: { width: 0, height: responsiveWidth(2) },
        shadowOpacity: 0.3,
        shadowRadius: responsiveWidth(4),
        elevation: 10,
        borderWidth: responsiveWidth(0)
    },
    textContainer: {
        marginTop: responsiveWidth(15),
        width: responsiveWidth(80),
        marginBottom: responsiveHeight(4)
    },
    header: {
        flexDirection: 'row',
        //...Platform.select({ ios: { marginTop: 0, }, android: { marginTop: 30 } }),
        justifyContent: 'space-between',
        width: responsiveWidth(100),
    },
    backBtn: {
        margin: responsiveWidth(6),
        width: responsiveWidth(9),
        height: responsiveHeight(3),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: responsiveWidth(2),
    },
    progressContainer: {
        alignItems: 'center'
    },
    progressBar: {
        //backgroundColor: '#FDE869',
        width: responsiveWidth(80),
        height: responsiveHeight(1),
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    progress: {
        backgroundColor: '#D9D9D9',
        width: responsiveWidth(10),
        height: responsiveHeight(1),
        borderRadius: 50
    },
    continuebtn: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: responsiveWidth(1),
    },
    interestContainer:{
        alignItems:'center',
        height:responsiveHeight(50)
    },
    searchIcon:{
        position:'absolute',
        top:responsiveHeight(1.8),
        left:responsiveWidth(5),
        zIndex:1
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        flex: 1,
    },
    interestSection: {
        width: responsiveWidth(95),
        height: responsiveHeight(15),
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: responsiveWidth(10),
    },
    titleText: {
        marginTop: responsiveWidth(6),
        marginLeft: responsiveWidth(5),
    },
    interest: {
        backgroundColor: 'white',
        paddingVertical: responsiveHeight(1.5),
        borderRadius: responsiveWidth(5),
        padding: 15,
        margin: responsiveWidth(1),
        alignItems: "center",
        flexDirection: 'row',
        height: responsiveHeight(5.5),
        width: responsiveWidth(42),
        marginTop: responsiveWidth(2),
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#EDD06A',
    },
    interestText: {
        paddingLeft: responsiveWidth(2),
        flexWrap: 'wrap',
    },
    scrollview: {
        ...Platform.select({ ios: { paddingBottom: responsiveWidth(110) }, android: { paddingBottom: responsiveWidth(116) } }),
        marginTop: responsiveWidth(2)
    },
    selectOf: {
        position: 'relative',
        ...Platform.select({ ios: { top: responsiveWidth(60) }, android: { top: responsiveWidth(65) } }),
        left: responsiveWidth(72)
    },
    interestsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        width:responsiveWidth(80),
        marginTop:responsiveHeight(3)
    },
    interestItem: {
        flexDirection: 'row',
        margin: responsiveWidth(2),
        paddingLeft:responsiveWidth(3),
        paddingRight:responsiveWidth(3),
        height:responsiveHeight(4.5),
        borderRadius: responsiveWidth(2),
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    selectedInterest: {
        borderWidth:responsiveWidth(0.2),
    },
    interestText: {
        fontSize: responsiveWidth(3),
        color: '#818080',
        marginLeft:responsiveWidth(1),
        fontWeight:"700",
        fontFamily:'Montserrat-Bold'
    },
    selectedText: {
        
    },
    
});

export default styles;
