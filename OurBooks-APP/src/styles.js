import { StyleSheet } from 'react-native'
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize
  	} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E9EEF6',
    },

    topInfo: {
        height: 100,
        width: '90%',
        flexDirection: 'row',
        marginTop: 50,
    },

    topInfoImg: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },

    topInfoTexts: {
        height: 100,
        flex: 1,
        paddingLeft: 10,
    },

    topInfoTextsTitle: {
        height: 40,
        width: '100%',
		justifyContent: 'center',
    },

    topInfoTextsSubtitle: {
        height: 60,
		width: '100%',
		marginRight: '3%',
	},

    topInfoTextsTitleFont: {
        fontSize: 22,
		fontWeight: 'bold',
		justifyContent: 'center',
    },

    topInfoTextsSubtitleFont: {
		fontSize: 18,
		justifyContent: 'center',
	},
	
	MiddleInfo: {
        flex:1,
        width: responsiveWidth(90),
		borderRadius: 10,
	},
	
	mapStyle: {
		flex:1,
	},
})

export default styles;
