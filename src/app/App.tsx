import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import NavBarGuestUser from './components/NavBar';
import { unloggedUserRouter } from './router/rootRouter';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
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
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}