import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
 
import Swiper from 'react-native-swiper';
 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  text: {
    color: '#ffff',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#202020',
  },
})
 
export default class Swipers extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true} index={1} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>NAVIGATION MODE</Text>  
        </View>
        
        <View style={styles.slide3}>
          <Text style={styles.text}>TRUST DRIVE</Text> 
        </View>

        <View style={styles.slide2}>   
          <Text style={styles.text}>MAPPER MODE</Text>   
        </View>
      </Swiper> 
    );
  }
}
