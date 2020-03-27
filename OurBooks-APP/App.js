// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Slider } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem, Button, Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import { Audio } from 'expo-av';

import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize
  	} from "react-native-responsive-dimensions";

import styles from './src/styles';

const Tab = createBottomTabNavigator();

const list = [
	{
	  	name: 'O preço do Amanhã',
	  	avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
	  	subtitle: 'Andrew Niccol'
	},
	{
	  	name: 'A culpa é das estrelas',
	  	avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
	  	subtitle: 'john Green'
	},
	{
		name: 'O preço do Amanhã',
		avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
		subtitle: 'Andrew Niccol'
	},
	{
		name: 'A culpa é das estrelas',
		avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
		subtitle: 'john Green'
	},
	{
		name: 'O preço do Amanhã',
		avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
		subtitle: 'Andrew Niccol'
	},
	{
		name: 'A culpa é das estrelas',
		avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
		subtitle: 'john Green'
	},
	{
		name: 'O preço do Amanhã',
		avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
		subtitle: 'Andrew Niccol'
	},
	{
		name: 'A culpa é das estrelas',
		avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
		subtitle: 'john Green'
	},
	{
		name: 'O preço do Amanhã',
		avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
		subtitle: 'Andrew Niccol'
	},
	{
		name: 'A culpa é das estrelas',
		avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
		subtitle: 'john Green'
	},
	{
		name: 'O preço do Amanhã',
		avatar_url: 'https://i0.wp.com/www.suspirepsi.com.br/wp-content/uploads/2019/04/o-preco-do-amanha-capa.jpg?fit=640%2C320',
		subtitle: 'Andrew Niccol'
	},
	{
		name: 'A culpa é das estrelas',
		avatar_url: 'https://lojasaraiva.vteximg.com.br/arquivos/ids/12709771/1006567097.jpg?v=637154357742170000',
		subtitle: 'john Green'
	},
];

function Explore() {

	const [search, setSearch] = useState('');

	return (

		<SafeAreaView forceInset={{top: 'always'}} style={ styles.container }>
		<Searchbar
		style={{marginTop:15, marginBottom: 15, width: '90%', backgroundColor: '#fff'}}
		placeholder="Pesquise aqui ..."
		onChangeText={query => { setSearch(query), setSearchLoad(true) }}
		value={search}
		selectionColor='#000'
		/>
		<ScrollView style={{flex:1}}>

			<View style={ styles.MiddleInfo}>
			{
				list.map((l, i) => (
				<ListItem
					key={i}
					leftAvatar={{ source: { uri: l.avatar_url } }}
					title={l.name}
					subtitle={l.subtitle}
					bottomDivider
				/>
				))
			}
			</View>
		</ScrollView>
		</SafeAreaView>
	);
}

function Listen() {

	const [urlSound, setUrlSound] = useState('https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3');
	const [time, setTime] = useState(0);
	const [maxTime, setMaxTime] = useState(9000000);
	const [playing, setPlaying] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {

	}, [])

	String.prototype.toHHMMSS = function () {
		var mill_num = parseInt(this, 10);
		var sec = Math.floor(mill_num / 1000);
		var hours   = Math.floor(sec / 3600);
		var minutes = Math.floor((sec - (hours * 3600)) / 60);
		var seconds = sec - (hours * 3600) - (minutes * 60);
	
		if (hours   < 10) {hours   = "0"+hours;}
		if (minutes < 10) {minutes = "0"+minutes;}
		if (seconds < 10) {seconds = "0"+seconds;}

		return hours+':'+minutes+':'+seconds;
	}

  	return (
		<SafeAreaView forceInset={{top: 'always'}} style={ styles.container }>
			<View style={ styles.topInfo }>
				<View style={ styles.topInfoTexts }>
					<View style={ styles.topInfoTextsTitle }>
							<Text multiline = {true} numberOfLines = {4} style={ styles.topInfoTextsTitleFont }>A CULPA É DAS ESTRELAS</Text>
					</View>
					<View style={ styles.topInfoTextsSubtitle }>
					<Text style={ styles.topInfoTextsSubtitleFont }>John Green</Text>
					</View>
				</View>
				<View style={ styles.topInfoImg }>
					<Image
					style={ styles.topInfoImg }
					source={require('./src/assets/icon.png')}
					/>
				</View>
			</View>
			<View style={styles.MiddleInfo}>
				<Image
					style={ styles.imageMiddleInfo }
					source={{uri:'https://fanficcao.files.wordpress.com/2017/09/picsart_09-16-01-19-19.jpg'}}
				/>
				<Slider
					style={ {marginTop: responsiveHeight(2) }}
					thumbTintColor={'#000'}
					minimumTrackTintColor={'#000'}
					value={ time }
					onValueChange={ value => {setTime(value)} }
					maximumValue={ maxTime }
				/>
				<Text>{String(time).toHHMMSS()}</Text>
				<View style={styles.controlBtn}>
					<TouchableOpacity style={{marginRight: responsiveWidth(5)}}>
						<MaterialCommunityIcons
							name="skip-previous"
							size={55}
							color="black"
						/>
						</TouchableOpacity>
						{ (playing)
						? (<TouchableOpacity 
						style={{marginRight: responsiveWidth(5)}}
						onPress={() => { handlePlayPause() }}>
						<MaterialCommunityIcons
							name="pause-circle"
							size={95}
							color="black"
						/>
						</TouchableOpacity>)
						: (<TouchableOpacity
						style={{marginRight: responsiveWidth(5)}}
						onPress={() => { handlePlayPause() }}>
						<MaterialCommunityIcons
							name="play-circle"
							size={95}
							color="black"
						/>
						</TouchableOpacity>) }
					<TouchableOpacity>
						<MaterialCommunityIcons
							name="skip-next"
							size={55}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default function App() {

	return (
	  <NavigationContainer>
		<Tab.Navigator
		  	screenOptions={({ route }) => ({
			tabBarIcon: ({ focused, color, size }) => {
			let iconName;
			if (route.name === 'Explorar') {
				iconName = focused
				? 'ios-apps'
				: 'ios-apps';
			} 
			else if (route.name === 'Ouvir') {
				iconName = focused 
				? 'ios-play-circle' 
				: 'ios-play-circle';
			}
			return <Ionicons name={iconName} size={35} color={color} />;
			},
			})}
			tabBarOptions={{
					activeTintColor: '#000',
					inactiveTintColor: 'gray',
					style: {elevation:0, borderTopWidth: 0, shadowOpacity:0, backgroundColor: '#E9EEF6'},
			}}
		>
		<Tab.Screen name="Explorar" component={Explore} />
		<Tab.Screen name="Ouvir" component={Listen} /> 
		</Tab.Navigator>
	  	</NavigationContainer>
	);
  }
