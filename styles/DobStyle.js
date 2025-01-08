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
    Button: {
        width: responsiveWidth(90),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(3),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: responsiveWidth(2) },
        shadowOpacity: 0.1,
        shadowRadius: responsiveWidth(2),
        elevation: 5,
        borderWidth:responsiveWidth(0)
    },
    mainText: {
        marginTop: responsiveWidth(15),
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
        width: responsiveWidth(20),
        height: responsiveHeight(0.8),
        borderRadius: 50
    },
    itemText: {
        fontSize: responsiveWidth(8),
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
    },
    scrollpicker: {
        height: responsiveHeight(45),
        width: responsiveWidth(25),
        justifyContent: 'center',
        backgroundColor: '#FCF2D6',
        marginTop: responsiveWidth(6)
    }

});

export default styles;