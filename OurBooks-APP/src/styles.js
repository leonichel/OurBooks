import { StyleSheet } from 'react-native'
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize
  	} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: responsiveWidth(100),
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E9EEF6',
    },

    topInfo: {
        height: responsiveHeight(25),
        width: responsiveWidth(90),
        flexDirection: 'row',
		marginTop: responsiveHeight(5),
		marginLeft: responsiveWidth(6),
		// backgroundColor: '#a20'
    },

    topInfoImg: {
        height: responsiveHeight(15),
        width: responsiveWidth(25),
		borderRadius: 50,
		marginRight: responsiveHeight(2),
		// backgroundColor: '#f50'
    },

    topInfoTexts: {
        height: responsiveHeight(30),
        flex: 1,
		marginLeft: responsiveHeight(2),
		marginBottom: responsiveHeight(2),
		// backgroundColor: '#f99',
    },

    topInfoTextsTitle: {
        height: responsiveHeight(12),
		width: '100%',
		justifyContent: 'center',
		marginBottom: responsiveHeight(0.5),
		// backgroundColor: '#f0f',
    },

    topInfoTextsSubtitle: {
        height: responsiveHeight(9.5),
		width: '100%',
		// backgroundColor: '#f10',
	},

    topInfoTextsTitleFont: {
        fontSize: responsiveFontSize(3.5),
		fontWeight: 'bold',
		justifyContent: 'center',
    },

    topInfoTextsSubtitleFont: {
		fontSize: responsiveFontSize(2.5),
		justifyContent: 'center',
	},
	
	MiddleInfo: {
        flex: 1,
        width: responsiveWidth(90),
		marginBottom: responsiveHeight(5),
		justifyContent: 'center',
		alignContent: 'center',
		// backgroundColor: '#a91'
	},

	imageMiddleInfo : {
		flex: 1,
		width: responsiveWidth(90),
		borderRadius: 15
		// backgroundColor: '#f50'
	},

	controlBtn: {
		marginTop: responsiveHeight(2),
        height: responsiveHeight(10),
        width: responsiveWidth(90),
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#a20'
    },
})

export default styles;
