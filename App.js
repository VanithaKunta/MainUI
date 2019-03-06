import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
<<<<<<< HEAD
=======
  Button,
  Image,
>>>>>>> 23b0d1058ebf6a1c0964b250aa698fbd02a3a0fc
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
<<<<<<< HEAD
    backgroundColor: '#ffffff',

=======
    backgroundColor: '#ffff',
>>>>>>> 23b0d1058ebf6a1c0964b250aa698fbd02a3a0fc
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: '#ffffff',
=======
    backgroundColor: '#ffff',
>>>>>>> 23b0d1058ebf6a1c0964b250aa698fbd02a3a0fc
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    fontFamily:'gotham rounded',
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#202020',
    padding: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch',
    //width:500,
=======
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
>>>>>>> 23b0d1058ebf6a1c0964b250aa698fbd02a3a0fc
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
<<<<<<< HEAD

      <Swiper style={styles.wrapper} showsButtons={true} index={1} loop={false}>
        <View style={styles.slide1}>
<<<<<<< HEAD
          <Text style={styles.text}>Navigation Mode</Text>
=======
        <ImageBackground source={require('./bg4.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>    
          <Text style={styles.text}>Navigation Mode</Text>   
          </TouchableOpacity>
          </ImageBackground>
        </View>
        
        <View style={styles.slide3}>
        <ImageBackground source={require('./bg4.jpg')} style={{width:500,height:null,flex:1}}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>    
          <Text style={styles.text}>Trust Drive</Text>   
          </TouchableOpacity>
          </ImageBackground>
>>>>>>> e2b0c9b2f3a9a970188b22833ee0e25d9e2c2880
        </View>

        <View style={styles.slide2}>
<<<<<<< HEAD
          <Text style={styles.text}>Mapping Mode</Text>
=======
        <ImageBackground source={require('./bg4.jpg')} style={{width:500,height:null,flex:1}}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}>
          <Text style={styles.text}>Mapping Mode</Text>
          </TouchableOpacity>
          </ImageBackground>
>>>>>>> e2b0c9b2f3a9a970188b22833ee0e25d9e2c2880
        </View>
      </Swiper>
      
    );
  }
}
 
//AppRegistry.registerComponent('myproject', () => Swiper);
=======
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
>>>>>>> 23b0d1058ebf6a1c0964b250aa698fbd02a3a0fc
