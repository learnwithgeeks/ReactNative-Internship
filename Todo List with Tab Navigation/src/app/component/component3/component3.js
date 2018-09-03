import React from 'react';
import {AppRegistry,Text,View,TextInput,Switch} from 'react-native';
export default class Component3 extends React.Component
{
    constructor()
    {
        super();
        this.state = {textValue:'Text',switchValue:false}
    }
    onChangeText(value)
    {
        this.setState({textValue:value});
    }
    onSubmit()
    {
        alert('Form is submitted');
    }
    onSwitchChange(value)
    {
        alert(value);
        this.setState({switchValue:value})
    }
    render()
    {
        return(
            <View>
                <TextInput
                placeholder="Please Enter Name"
                value ={this.state.textValue}
                onChangeText={(value)=> this.onChangeText(value)}
                onSubmitEditing={this.onSubmit}/>
                <Text>{this.state.textValue}</Text>
                <Switch
                value = {this.state.switchValue}
                onValueChange = {(value) => this.onSwitchChange(value)}
                />
            </View>
        )
    }
}
AppRegistry.registerComponent('component3',()=> Component3);