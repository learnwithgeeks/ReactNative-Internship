import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ImageBackground} from 'react-native';
/*
export default class extends React.Component
{
  render()
  {
    return(
      <Swiper style={styles.wrapper} autoplay={true}>
      <View style={styles.slide1}>
        <Image style={{resizeMode:'cover',position:'absolute',width:'100%',height:'100%'}} source={require('./resources/img/1.jpg')}/>
        <TouchableOpacity style={{marginLeft:'90%'}}><Text style ={{fontSize:80,color:'white',zIndex:'2'}}>></Text></TouchableOpacity>
      </View>
      <View style={styles.slide2}>
        <Image style={{resizeMode:'cover',position:'absolute',width:'100%',height:'100%'}} source={require('./resources/img/2.jpg')}/>
        <TouchableOpacity style={{marginLeft:'90%'}}><Text style ={{fontSize:80,color:'white',zIndex:'2'}}>></Text></TouchableOpacity>
      </View>
      <View style={styles.slide3}>
        <Image style={{resizeMode:'cover',position:'absolute',width:'100%',height:'100%'}} source={require('./resources/img/3.jpg')}/>
        <TouchableOpacity style={{marginLeft:'90%'}}><Text style ={{fontSize:80,color:'white',zIndex:'2'}}>></Text></TouchableOpacity>
      </View>
    </Swiper>
  );
  }
}
let styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  }
})
*/
class BackgroundImage extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.state = {counter:1}
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter()
  {
    if(this.state.counter===3)
    {
    this.setState({counter:counter++})
    }
  }

  render()
  {
    return (
      <View>
        <ImageBackground source={require('./resources/'+counter+'.png')}/>
      </View>
    )
  }
} 