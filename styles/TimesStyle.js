import { StyleSheet, Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export const responsiveWidth = (percentage) => (width * percentage) / 100;
export const responsiveHeight = (percentage) => (height * percentage) / 100;
const selectSize = responsiveWidth(6);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        alignItems: 'center',
    },
    continuebtn: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 15
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
    itemText: {
        width: responsiveWidth(85),
        height: responsiveHeight(8),
        backgroundColor: 'white',
        margin: responsiveWidth(2),
        borderRadius: responsiveWidth(3),
        paddingTop: responsiveWidth(4.5),
        paddingLeft: responsiveWidth(4),
        fontSize: responsiveWidth(3.5),
        fontWeight: '400',

    },
    selectedItem: {
        borderColor: '#C29225',
        borderWidth: 2,
        fontWeight: '600'
    },
    items: {
        marginTop: responsiveWidth(5)
    },
    itemsSection: {
        flexDirection: 'row',
        marginLeft: 1
    },
    selection: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: responsiveWidth(15),
    },
    itemCircle: {
        width: selectSize,
        height: selectSize,
        borderRadius: selectSize / 2,
        borderColor: '#999999',
        borderWidth: responsiveWidth(0.2),
    },
    selectedItemCircle: {
        borderColor: '#C29225',
        borderWidth: responsiveWidth(0.8),
    },
    radio: {
        marginVertical: responsiveWidth(4),
        fontSize: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#C29225',
    },
    timeText: {
        flexDirection: 'row',
        width: responsiveWidth(80),
        justifyContent: 'space-between',
    },
    timeLabelText: {
        marginBottom: responsiveWidth(10),
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveWidth(3),
        padding: responsiveWidth(2),
    },
    circle: {
        width: responsiveWidth(8),
        height: responsiveHeight(3.6),
        borderRadius: responsiveWidth(5),
        borderWidth: 2,
        borderColor: '#D9D9D9',
        marginRight: 10,
        backgroundColor: '#D9D9D9'
    },
    circleSelected: {
        backgroundColor: '#F39C12',
        borderWidth: responsiveWidth(1.5)
    },
    timeContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
    slot1n2: {
        flexDirection: 'row'
    },
    slot3n4: {
        flexDirection: 'row'
    },
    slots:{
        margin:responsiveWidth(1),
        borderWidth:2,
        borderRadius:20,
        borderColor:"#ffffff"
    }
})

export default styles;