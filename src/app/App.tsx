import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import NavBarGuestUser from './components/NavBar';
import { unloggedUserRouter } from './router/rootRouter';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={NavBarGuestUser}
          options={{ headerShown: false }}
          name="NavBarGuestUser"
        />
        {Object.entries(unloggedUserRouter).map(([id, screenComponent]) => (
          <Stack.Screen
            key={id}
            name={id}
            component={screenComponent}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}