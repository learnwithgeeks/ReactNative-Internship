import React from 'react';
import { StyleSheet,AsyncStorage,Alert, Text, View,Image ,TouchableOpacity,TextInput } from 'react-native';
export default class App extends React.Component {
    
  static navigationOptions = {
        headerStyle: { backgroundColor: '#F15B4E' },
        headerTintColor:'white'
      };

      constructor(props)
      {
        super(props);
        this.state={username:'',password:''}
        this.accountLogin = this.accountLogin.bind(this);
      }

      accountLogin()
      {
        let username = this.state.username;
        if(this.state.username != '' && this.state.password != '')
        {
        AsyncStorage.getItem(username,(err,result) =>
      {
        if(result == undefined)
        {
          Alert.alert(username+' is not exist in database');
        }
        else
        {
          if(JSON.parse(result).password == this.state.password)
          { 
            const { navigate } = this.props.navigation;
            navigate("ScreenFive", {screen:username});
          }
          else
          {
            Alert.alert('Incorrect Password');
          }
        }
      })
    }
    else
    {
      Alert.alert('Please Enter Username or password');
    }
      }

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

        <View style={styles.TextInputView}>
            <TextInput style={styles.TextInputStyle} placeholder="Username" placeholderTextColor="white" underlineColorAndroid="white" onChangeText={(value) => this.setState({username:value})}/>
            <TextInput style={styles.TextInputStyle} placeholder="Password" placeholderTextColor="white" underlineColorAndroid="white" secureTextEntry={true} onChangeText={(value) => this.setState({password:value})}/>
        </View>

        <View style={styles.buttonView}>
        
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress = {this.accountLogin}
        >
        
        <Text style={styles.buttonTextStyleLogin}>LOGIN</Text>
        
        </TouchableOpacity>
        
        </View>

        <View style={styles.createAccountView}>
            <Text style={styles.createAccount} onPress={() => navigate("ScreenFour", {screen: "Screen Four"})}>Create An Account ?</Text>
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
  },
  buttonStyle:
  {
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
    color:'white'
  },
  TextInputView:
  {
    top:30,
    width:'100%'
  },
  TextInputStyle:
  {
    fontSize:23,
    paddingBottom:10,
    marginTop:20,
    flexDirection:'row'
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
});