import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity } from 'react-native';
export default class App extends React.Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#F15B4E' },
      };
    render() {
        const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <Image
        style={styles.fancyLogoStyle}
        source={require('../Resources/fancylogo.jpg')}
        />

        <Text
        style={styles.fancyTextStyle}
        >FANCY</Text>

        <View style={styles.buttonView}>
        
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigate("ScreenFour", {screen: "Screen Four"})}
        >
        
        <Text style={styles.buttonTextStyle}>SIGN UP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}
        >
        
        <Text style={styles.buttonTextStyleLogin}>LOGIN</Text>
        
        </TouchableOpacity>
        
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F15B4E',
    height:'100%',
    alignItems:'center',
    position:'relative'
  },
  fancyLogoStyle:
  {
    top:10,
    width:120,
    height:120
  },
  fancyTextStyle :
  {
    top:10,
    fontSize:35,
    fontFamily:'monospace',
    color:'white',
    textShadowColor:'black',
    textShadowOffset:{width:1,height:1}
  },
  buttonView:
  {
    position:'absolute',
    bottom:'38%',
  },
  buttonStyle:
  {
    marginTop:20,
    backgroundColor:'rgba(11,11,11,0.3)',
    borderColor:'white',
    borderWidth:2,
    paddingLeft:50,
    paddingRight:50,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:200
  },
  buttonTextStyleLogin:
  {
    fontSize:20,
    color:'white',
    marginLeft:10
  },
  buttonTextStyle:
  {
    fontSize:20,
    color:'white'
  }
});