import React from 'react';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY='593c854e4ab9b325fc41b60e0d98913f';

export default class extends React.Component {
  state={
    isLoading: true
  }
  getWeather=async(latitude, longitude)=>{
    const {
      data: {
        main: {temp},
        weather,
        name,
      }
    }=await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`)
    console.log(latitude, longitude, name)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      description: weather[0].description,
      temp,
      name: name
    })
  }
  getLocation=async()=>{
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}}=await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition, name, description}=this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition} name={name} description={description}/>;
  }
}

