import React from 'react';
import {AppRegistry,Text,View} from 'react-native';
export default class component1 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
    {
        name:'vivek',
        showName:false,
        message : this.props.message
    }
    }
    static defaultProps = {
        message:'Hi there'
    }
    render()
    {
        let name = this.state.showName ? this.state.name : 'No name is given';
        return(
            <View>
                <Text>{this.state.message}</Text>
                <Text>{name}</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('component1',()=> component1);

