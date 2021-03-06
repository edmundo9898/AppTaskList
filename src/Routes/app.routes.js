import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';


//importando as pages para a navegação
import Home from '../pages/Home';

//
const AppStack = createStackNavigator();
 
function AppRoutes(){
    return(
        
        <AppStack.Navigator>
            <AppStack.Screen 
            name='Home'
            component={Home}
            options={{
                headerShown:false
            }}
            />

        </AppStack.Navigator>

    )
}


export default AppRoutes;