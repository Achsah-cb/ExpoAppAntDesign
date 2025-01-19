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
        margin: 20,
        marginTop: responsiveWidth(4),
    },
    Input: {
        width: responsiveWidth(80),
        height: responsiveHeight(7),
        borderRadius: responsiveWidth(3),
        padding: responsiveWidth(3),
        backgroundColor: 'white',
        marginTop: responsiveWidth(7),
        borderWidth: responsiveWidth(0.1),
        borderColor: '#909090',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: responsiveWidth(2) },
                shadowOpacity: 0.1,
                shadowRadius: responsiveWidth(2),
            },
            android: {
                elevation: 10,
            }
        })
    },
    Button: {
        width: responsiveWidth(80),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(4),
        marginTop: 25,
        borderWidth: responsiveWidth(0),
        ...Platform.select({
            ios: {
                shadowColor: '#FF2A64',
                shadowOffset: { width: 0, height: responsiveWidth(2) },
                shadowOpacity: 0.3,
                shadowRadius: responsiveWidth(2),
            },
            android: {
                elevation: 10,
            }
        })
    },
    buttonContainer: {
        width: responsiveWidth(80),
        height: responsiveHeight(50),
        paddingBottom:responsiveHeight(10),
        justifyContent: 'flex-end',
        
    },
    textContainer: {
        marginTop: responsiveWidth(15),
        width: responsiveWidth(80),
    },
    header: {
        flexDirection: 'row',
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
        alignItems: 'center',
    },
    progressBar: {
        width: responsiveWidth(80),
        height: responsiveHeight(1),
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progress: {
        backgroundColor: '#D9D9D9',
        width: responsiveWidth(10),
        height: responsiveHeight(1),
        borderRadius: 50,
    },
});

export default styles;
