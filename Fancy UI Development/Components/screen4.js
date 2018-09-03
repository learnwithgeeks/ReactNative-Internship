import React from 'react';
import { StyleSheet,AsyncStorage, Text, View,Image ,TouchableOpacity,TextInput,Alert } from 'react-native';
export default class App extends React.Component {
  
     constructor(props)
     {

       super(props);
       this.state={username:'',password:'',repeatPassword:'',address:'',contactNumber:''}
       this.createAccount = this.createAccount.bind(this);
     }

     static navigationOptions = {
        headerStyle: { backgroundColor: '#F15B4E' },
        headerTintColor:'white'
      };


      createAccount()
      {
        let username = this.state.username;
        AsyncStorage.getItem(username,(err,result) =>{
        if(result == undefined)
        {
        let password = this.state.password;
        let contactNumber = this.state.contactNumber;
        let repeatPassword = this.state.repeatPassword;
        let address = this.state.address;
        let createAccountJSON = {
          username : username,
          password : password,
          repeatPassword : repeatPassword,
          address : address,
          contactNumber : contactNumber
        };
        AsyncStorage.setItem(username,JSON.stringify(createAccountJSON));
        if(username!='' && password !='' && contactNumber !='' && repeatPassword !='' && address !='')
        {
          if(password === repeatPassword)
          {
            const { navigate } = this.props.navigation;
            navigate("ScreenTwo", {screen: "Screen Two"});
          }
          else
          {
            Alert.alert("Password is not matched");
          }
        }
        else
        {
           Alert.alert("Please Fill All Field's");
        }
      }
      else if(result != undefined)
      {
        Alert.alert('Username Already Exist');
      }
      });
     
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
            <TextInput style={styles.TextInputStyle} placeholder="Username" placeholderTextColor="white" underlineColorAndroid="white" ref='username' onChangeText={(value) => this.setState({username:value})}/>
            <TextInput style={styles.TextInputStyle} placeholder="Password" placeholderTextColor="white" underlineColorAndroid="white" secureTextEntry={true} ref='password' onChangeText={(value) => this.setState({password:value})}/>
            <TextInput style={styles.TextInputStyle} placeholder="Repeat Password" placeholderTextColor="white" underlineColorAndroid="white" secureTextEntry={true} ref='repeatPassword' onChangeText={(value) => this.setState({repeatPassword:value})}/>
            <TextInput style={styles.TextInputStyle} placeholder="Address" placeholderTextColor="white" underlineColorAndroid="white" ref='address' onChangeText={(value) => this.setState({address:value})} />
            <TextInput style={styles.TextInputStyle} keyboardType='numeric' placeholder="Contact Number" placeholderTextColor="white" underlineColorAndroid="white" ref='numeric' onChangeText={(value) => this.setState({contactNumber:value})}/>
        </View>

        <View style={styles.buttonView}>
        
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={this.createAccount}
        >
        
        <Text style={styles.buttonTextStyleLogin}>SIGN UP</Text>
        
        </TouchableOpacity>
        
        </View>

        <View style={styles.createAccountView}>
            <Text style={styles.createAccount} onPress={() => navigate("ScreenTwo", {screen: "Screen Two"})}>Already Have An Account ?</Text>
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
    position:'relative',
    backgroundColor:'rgba(11,11,11,0.3)',
    borderColor:'white',
    borderWidth:2,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:10,
    paddingTop:10,
    borderRadius:200,
    top:110
  },
  buttonTextStyleLogin:
  {
    fontSize:20,
    color:'white'
  },
  TextInputView:
  {
    top:3,
    width:'100%'
  },
  TextInputStyle:
  {
    fontSize:23,
    paddingBottom:10,
    marginTop:20
  },
  createAccountView:
  {
    position:'absolute',
    bottom:0
  },
  createAccount:
  {
    color:'white',
    fontWeight:'bold'
  },
});