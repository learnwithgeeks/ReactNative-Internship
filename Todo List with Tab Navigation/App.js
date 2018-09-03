import React from 'react';
import {View,TextInput,Text,Switch,StyleSheet,ScrollView,Button} from 'react-native';
import { TabNavigator } from 'react-navigation';
let myArray = [];
class AddTodo extends React.Component
{
    constructor()
    {
        super();
        this.state =
        {
            switchValue:false,
            myValue:'',
            writtenValue: '',
            notEditable:false
        }
    }

    onChangeText(value)
    {
        this.setState({myValue:value});
    }
    onSwitchChange(value)
    {
        this.setState({switchValue:value})
        if(value === true)
        {
        this.setState({writtenValue:this.state.myValue});
        myArray.push(this.state.myValue);
        }
        else
        {
        this.setState({writtenValue:'',myValue:''});     
        }
    }
    render()
    {
        return(
            <View style={style.AddTodoView}>
            <TextInput 
            placeholder="Please enter your message here"
            value = {this.state.myValue} 
            onChangeText ={(value) => this.onChangeText(value)}
            style = {style.inputTextAddTodo}
            />
            <Text style={{color:'white'}}>{this.state.writtenValue}</Text>
            <Switch
            value = {this.state.switchValue}
            onValueChange = {(value) => this.onSwitchChange(value)}
            />
            </View>
        )
    }
} 

class ShowList extends React.Component
{
    constructor()
    {
        super();
        this.state={counter:0}
        this.myMethod = this.myMethod.bind(this);
        setInterval(this.myMethod,1000);
    }

    myMethod()
    {
       this.setState({counter:1});
    }

    deleteElement(index)
    {
        myArray.splice(index,1);
    }
    
   render()
   {
       console.log(this.state.counter);
       return(
        <ScrollView>
       <View style={style.todoListUpdate}>
           {myArray.map((response,index) =>
           {
               return  <View key={index}><Text key={index} style={style.textColor}>{index+'---'+response}</Text><Button key={index} title="delete" color="green" onPress={() => this.deleteElement(index)}/></View>
           })}
       </View>
       </ScrollView>
       )
   }
}

const MyApp = TabNavigator({
    ShowList: {
      screen: ShowList,
    },
    AddTodo: {
      screen: AddTodo,
    }
  });


const style = StyleSheet.create(
    {
        AddTodoView :
        {
           backgroundColor:'#004B8D', 
           height:'100%'
        },
        inputTextAddTodo :
        {
            height:100,
            color:'white',
            fontSize:25
        },
        todoListUpdate :
        {
            backgroundColor:'#B93A32',
            height:'100%',
        },
        textColor:
        {
            color:'white',
            borderBottomWidth:1,
            borderColor:'black',
            fontSize:30
        }
    }
)
export default MyApp;