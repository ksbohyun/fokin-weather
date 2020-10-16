import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#108dc7', '#ef8e38'],
        title:'번개',
        subtitle:''
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#16222A', '#3A6073'],
        title:'이슬비',
        subtitle:''
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#3A6073', '#3A6073'],
        title:'비',
        subtitle:''
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#274046', '#E6DADA'],
        title:'눈',
        subtitle:''
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Sand: {
        iconName: 'weather-fog',
        gradient: ['#3E5151', '#DECBA4'],
        title:'황사',
        subtitle:''
    },
    Ash: {
        iconName: 'weather-fog',
        gradient: ['#304352', '#d7d2cc'],
        title:'안개',
        subtitle:''
    },
    Squall: {
        iconName: 'weather-tornado',
        gradient: ['#525252', '#3d72b4'],
        title:'태풍',
        subtitle:''
    },
    Tornado: {
        iconName: 'weather-tornado',
        gradient: ['#525252', '#3d72b4'],
        title:'태풍',
        subtitle:''
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#22c1c3', '#fdbb2d'],
        title:'맑음',
        subtitle:''
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#232526', '#414345'],
        title:'흐림',
        subtitle:""
    },
}

export default function Weather({temp, condition, name}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={100} name={weatherOptions[condition].iconName} color='white'/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].title}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes={
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado',
        'Clear',
        'Clouds'
    ]).isRequired,
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp:{
        fontSize: 50,
        color: 'white',
    },
    halfContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: 'white',
        fontSize: 50,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle:{
        fontWeight: '600',
        color: 'white',
        fontSize: 25
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: 'center'
    }
})
