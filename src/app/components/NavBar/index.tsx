import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Curatory from '../../pages/Curatory';
import Home from '../../pages/Home';


const Tab = createBottomTabNavigator();

const NavBarGuestUser = () => {
  const tabBarIcon = (iconName: string) => {
    const iconComponent = ({ color, focused, size }: { color: string; focused: boolean; size: number }) => (
      <Icon name={iconName} size={focused ? size + 2 : size} color={color} />
    );
    iconComponent.displayName = 'TabBarIcon';
    return iconComponent;
  };

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <View style={styles.navbarContainer}>
          <BottomNavigation.Bar
            theme={{ colors: { secondaryContainer: 'transparent' } }}
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) =>
              descriptors[route.key].options.tabBarIcon?.({
                focused,
                color,
                size: 26,
              }) || null
            }
            getLabelText={({ route }) => descriptors[route.key].options.tabBarLabel || ''}
            activeColor='#6750a4'
            style={styles.bottomBar}
          />
        </View>
      )}
    >
      <Tab.Screen
        key={'trends'}
        component={Home}
        name='Home'
        options={{
          tabBarIcon: tabBarIcon('trending-up'),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        key={'favorites'}
        component={Curatory}
        name='Curatory'
        options={{
          tabBarIcon: tabBarIcon('heart-outline'),
          tabBarLabel: 'Selection',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    height: 45,
    justifyContent: 'center',
    paddingBottom: 0,
    paddingTop: 0,
  },
  navbarContainer: {
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.02,
    shadowRadius: 2.62,
  },
});

NavBarGuestUser.title = 'NavBarGuestUser';

export default NavBarGuestUser;
