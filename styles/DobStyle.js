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
        marginTop: responsiveWidth(4),
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 15
    },
    ageItem: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageText: {
        fontSize: 48,
        color: '#333',
        opacity: 0.5
    },
    selectAgeText: {
        height: 80,
        color: '#D5912E',
        fontSize: 64,
        fontWeight: 'bold',
        opacity: 1,
        borderBlockColor: '#FFB200',
    },
    selectAgeItem: {
        padding: 40
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
        width: responsiveWidth(80)
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
    datepicker:{
        width:responsiveWidth(80),
        height:responsiveHeight(42),
        marginTop:responsiveHeight(2),
        justifyContent:'center',
        backgroundColor:'white',
        padding:responsiveWidth(4)
    },
    pickerWrapper: {
        marginVertical: 10,
        overflow: "hidden",
    },
    picker: {
        height: responsiveHeight(12),
        width: responsiveWidth(30),
    },
});

export default styles;