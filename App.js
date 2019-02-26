import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
//import ImageBackground from 'react-native';
 
import Swiper from 'react-native-swiper';

 
 
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020',
  },
  text: {
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#202020',
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#202020',
    padding: 10
  },
})
 
export default class Swipers extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
   onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render(){
    return (

      <Swiper style={styles.wrapper} showsButtons={true} index={1} loop={false}>
        <View style={styles.slide1}>
        <ImageBackground source={require('./bg2.jpg')} style={{width:500,height:null,flex:1}}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>    
          <Text style={styles.text}>Navigation Mode</Text>   
          </TouchableOpacity>
          </ImageBackground>
        </View>
        
        <View style={styles.slide3}>
        <ImageBackground source={require('./bg2.jpg')} style={{width:500,height:null,flex:1}}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>    
          <Text style={styles.text}>Trust Drive</Text>   
          </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.slide2}>
        <ImageBackground source={require('./bg2.jpg')} style={{width:500,height:null,flex:1}}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>
          <Text style={styles.text}>Mapping Mode</Text>
          </TouchableOpacity>
          </ImageBackground>
        </View>
      </Swiper>
      
    );
  }
}
 
//AppRegistry.registerComponent('myproject', () => Swiper);