import React from 'react';
import {View,TextInput,Text,Switch,FlatList,Button} from 'react-native';

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
            notEditable:false,
            myArray:[]
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
        this.setState({myArray:this.state.myArray.concat(this.state.myValue)});
        }
        else
        {
        this.setState({writtenValue:'',myValue:''});     
        }
    }

    deleteItem(IndexArray)
    {
      console.log(IndexArray);
      let newArray = this.state.myArray.splice(IndexArray,1);
      this.setState({myArray:newArray})
    }

    render()
    {
        return(
            <View>

            <TextInput 
            placeholder="Please enter your message here"
            value = {this.state.myValue} 
            onChangeText ={(value) => this.onChangeText(value)}
            />

            <Text>{this.state.writtenValue}</Text>
            
            <Switch
            value = {this.state.switchValue}
            onValueChange = {(value) => this.onSwitchChange(value)}
            />

            <FlatList
          data={this.state.myArray}
          renderItem={({ item, index }) =>
            <View key={index}>
              <View>
                <Text>
                  {index+' - '+item}
                </Text>
                <Button title="X" onPress={(index) => this.deleteItem(index)}/>
              </View>
              <View />
            </View>}
        />

            </View>
        )
    }
} 
export default AddTodo;