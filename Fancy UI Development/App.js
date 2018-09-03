import React from 'react';
import { StackNavigator } from 'react-navigation';
import ScreenOne from './Components/screen1';
import ScreenTwo from './Components/screen2';
import ScreenThree from './Components/screen3';
import ScreenFour from './Components/screen4';
import ScreenFive from './Components/screen5';

const App = StackNavigator({
    ScreenOne: {screen: ScreenOne,},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree},
    ScreenFour: {screen:ScreenFour},
    ScreenFive:{
        screen:ScreenFive ,
        navigationOptions: { header:null }
    }
})


export default App;