import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity,TextInput,Linking } from 'react-native';
export default class App extends React.Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#F15B4E' },
        headerTintColor:'white'
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
        >
        
        <Image
        style={styles.TwitterLogo}
        source={require('../Resources/f.png')}
        /><Text style={styles.buttonFacebook}>SIGNUP VIA FACEBOOK</Text>
        
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.buttonStyle}
        >
        <Image
        style={styles.TwitterLogo}
        source={require('../Resources/t.png')}
        />
        <Text style={styles.buttonTwitter}>SIGNUP VIA TWITTER</Text>
        
        </TouchableOpacity>
        
        <TouchableOpacity 
        style={styles.buttonStyle}
        >
        <Image
        style={styles.TwitterLogo}
        source={require('../Resources/e.png')}
        />
        <Text style={styles.buttonEmail}>SIGNUP WITH EMAIL</Text>
        
        </TouchableOpacity>
        
        </View>

        <View style={styles.createAccountView}>
            <Text style={styles.createAccount} onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})} >Already Have An Account ?</Text>
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
    bottom:'25%',
    width:'90%'
  },
  buttonStyle:
  {
    backgroundColor:'white',
    borderColor:'white',
    borderWidth:2,
    paddingBottom:10,
    marginTop:15,
    borderRadius:200
  },
  buttonFacebook:
  {
    color:'blue',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:-30
  },
  buttonTwitter:
  {
    color:'#1DA1F2',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:-30
  },
  buttonEmail:
  {
    color:'orange',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:-30
  },
  createAccountView:
  {
    position:'absolute',
    bottom:30,
  },
  createAccount:
  {
    color:'white',
    fontWeight:'bold'
  },
  TwitterLogo:
  {
    height:40,
    width:40,
    paddingLeft:10
  },
});