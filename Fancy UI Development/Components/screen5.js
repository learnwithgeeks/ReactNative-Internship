import React from 'react';
import {StyleSheet,View,Text,AsyncStorage,Button,Image,ScrollView} from 'react-native';
import {DrawerNavigator,NavigationActions} from 'react-navigation';
class MyHomeScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        let getUser = this.props.navigation.state.params.screen;
        this.state = {userInfo:{}}
        AsyncStorage.getItem(getUser,(err,result) =>
        {
            this.setState({userInfo:JSON.parse(result)})
        })
    }
    componentDidMount()
    {
        <Menu userName = {this.state.userInfo.username} />
    }

    render()
    {
        return(
            <View style={styles.homeStyle}>
                <Text style={styles.textSize}>Username : {this.state.userInfo.username}</Text>
                <Text style={styles.textSize}>Address : {this.state.userInfo.address}</Text>
                <Text style={styles.textSize}>Contact Number : {this.state.userInfo.contactNumber}</Text>
            </View>
        )
    }
} 

class About extends React.Component {
    render() {
      return (<View style={styles.About}></View>);
    }
  }

class MyNotificationsScreen extends React.Component {

    render() {
      return (<View style={styles.Notifications}></View>);
    }
  }
class MyMessagesScreen extends React.Component {
    
        render() {
          return (<View style={styles.Messages}></View>);
        }
      }
    
class Menu extends React.Component
{
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
    
    constructor(props)
    {
        super(props);
        this.redirectToLogin = this.redirectToLogin.bind(this);
    }
    redirectToLogin()
    {
        const { navigate } = this.props.navigation;
        navigate("ScreenTwo", {screen:"Screen Two"});
    }

    render()
    {
        return(
        <View style={styles.drawerStyle}>
            <View style={{flexDirection: "row"}}>
            <Image source={require('../Resources/userb.png')} style={styles.ImageStyle}/>
            <Text style={{fontSize:30,marginTop:25}}>{this.props.items[0].params.screen}</Text>
            </View>
            <View>
            <ScrollView>
            <Text style={styles.menuTextStyle} onPress={this.navigateToScreen('Home')}>Home</Text>
            <Text style={styles.menuTextStyle} onPress={this.navigateToScreen('About')}>About</Text>
            <Text style={styles.menuTextStyle} onPress={this.navigateToScreen('Messages')}>Messages</Text>
            <Text style={styles.menuTextStyle} onPress={this.navigateToScreen('Notifications')}>Notifications</Text>
            </ScrollView>
            </View>
            <View style={styles.buttonFooter}>
            <Button title="Logout" onPress={this.redirectToLogin}/>
            </View>
        </View>
        )
    }
}
const MyApp = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
    Messages: {
        screen: MyMessagesScreen,
    },
    About:
    {
        screen:About,
    },
  },
  {
   contentComponent:Menu,
  });

const styles = StyleSheet.create(
    {
        textSize:
        {
            fontSize:30,
            color:'white',
            borderBottomColor:'white',
            textAlign:'center',
            borderBottomWidth:1,
            paddingTop:10,
            paddingBottom:10
        },
        Notifications:
        {
            height:'100%',
            backgroundColor:'#3cb371'
        },
        Messages:
        {
            height:'100%',
            backgroundColor:'#ffa500'
        },
        drawerStyle:
        {
            height:'100%',
            position:'relative'
        },
        About:
        {
            height:'100%',
            backgroundColor:'#6a5acd'
        },
        homeStyle:
        {
            backgroundColor:'#F15B4E',
            height:'100%',
            justifyContent:'center'
        },
        ImageStyle:
        {
            width:80,
            height:80
        },
        menuTextStyle :
        {
            fontSize:30,
            backgroundColor:'rgba(1,1,1,0.3)',
            paddingTop:10,
            width:'100%',
            color:'white',
            borderWidth:1,
            borderBottomColor:'black',
            paddingBottom:10
        },
        buttonFooter:
        {
            position:'absolute',
            top:25,
            left:220
        }
    }
)

export default MyApp;