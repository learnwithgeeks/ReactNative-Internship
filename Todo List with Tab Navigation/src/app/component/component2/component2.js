import React from 'react';
import {AppRegistry,Text,View,StyleSheet,TouchableHighlight,TouchableOpacity} from 'react-native';
export default class Component2 extends React.Component
{
    onPress()
    {
        alert('Area 1 Pressed');
    }
    onPress2()
    {
        alert('Area 2 Pressed');
    }
    render()
    {
        return(
            <View>
                 <View style={styles.myView}>
                     <Text style={styles.myText}>Hello vivek</Text>
                 </View>
                 <View style={styles.container}>
                    <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor="white">
                    <View>
                    <Text> View1 </Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this.onPress2} style={styles.v2}>
                    <View>
                    <Text> View2 </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.v3}>
                    <Text style={styles.vText}> View3 </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        myView:
        {
            backgroundColor:'blue'
        },
        myText:
        {
            color:'white'
        },
        container:
        {
            flexDirection:'row', //flex direction is use to add direction of child view
            height:100
        },
        v1:
        {
            flex:1,
            backgroundColor:'red',
            padding:10
        },
        v2:
        {
            flex:1,
            backgroundColor:'green',
            padding:10
        },
        v3:
        {
            flex:1,
            backgroundColor:'black',
            padding:10
        },
        vText:
        {
            color:'white'
        }
    }
)
AppRegistry.registerComponent('Component2',()=> Component2);

