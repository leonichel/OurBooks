// eslint-disable-next-line import/no-unresolved
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Button, Icon } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

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
  	return (
		<View style={ styles.topInfo }>
			<View style={ styles.topInfoTexts }>
				<View style={ styles.topInfoTextsTitle }>
					<Text style={ styles.topInfoTextsTitleFont }>OurBooks - Always Free</Text>
				</View>
			</View>
			<View style={ styles.topInfoImg }>
				<Image
				style={ styles.topInfoImg }
				source={require('./src/assets/icon.png')}
				/>
			</View>
		</View>
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

				return <Ionicons name={iconName} size={size} color={color} />;
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
