import React, { Component } from 'react';
import getRoutes from './routes.js'
import { NavigationComponent } from 'react-native-material-bottom-navigation-performance';
import { ThemeColor, ThemeSpacing } from 'Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DEVICE_TYPE } from '../setting';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

const getTabRoute = () => {
  let tabRoute = {};
  let configMaterialBottomNavigationBar = {};
  const routes = getRoutes();
  console.log('routes', routes)
  Object.keys(routes).map((key, index) => {
    switch (key){
      case 'HomePage':
      case 'Profile':
      case 'Library':
      case 'Contact':
      {
        const {
          title,
          screen,
          tabBarLabel,
          icon,
          barBackgroundColor,
          headerBackgroundColor
        } = routes[key][DEVICE_TYPE];
        configMaterialBottomNavigationBar[key] = {
          barBackgroundColor,
        }
        tabRoute[key] = {
          screen,
          navigationOptions: navigation => ({
            title,
            tabBarLabel,
            headerStyle: {
              backgroundColor: headerBackgroundColor,
              elevation: 0,
            },
            tabBarIcon: ({ tintColor }) => (
              <Icon
                name={icon}
                size={24}
                color={tintColor? tintColor : 'white'}
              />
            ),
            ...navigation.navigationOptions,
          }),
        };
        break;
      }
      default: {
        break;
      }
    }
  });
  return {route: tabRoute, configTab: configMaterialBottomNavigationBar};
};


const getStackRoute = (initialRouteName = 'HoldingPlaceHolder') => {
  let stackRoute = {};
  const routes = getRoutes()
  Object.keys(routes).map((key, index) => {
    const { title, screen, headerBackgroundColor = ThemeColor.PATIENT_TAB_COLOR } = routes[key][DEVICE_TYPE] ? routes[key][DEVICE_TYPE] : routes[key].phone; // Default phone
    let navigationOptions;
    if (title) {
      // Screen with header
      navigationOptions =  navigation => ({
        title,
        headerStyle: {
          backgroundColor: headerBackgroundColor,
          height: ThemeSpacing.TABBAR_HEIGHT,
          elevation: 0,
        },
      })
    } else {
      navigationOptions = navigation => ({
        header: null,
      })
    }
    stackRoute[key] = {
      screen,
      navigationOptions,
    }
  });
  return stackRoute;
};




const getTabNavigator = () => {
  const tabNavigator = TabNavigator(getTabRoute().route, {
    tabBarPosition: 'bottom',
    // animationEnabled: false,
    tabBarComponent: NavigationComponent,
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        backgroundColor: '#b0b0b0',
        // shifting: true,
        tabs: getTabRoute().configTab,
      }
    }
  });
  return tabNavigator;
}

const getStackNavigator = (initialRouteName = 'Main') => {
  const statckNavigator = StackNavigator({
    Main: {
      screen: getTabNavigator(),
    },
    ...getStackRoute(),
  }, {
    initialRouteName,
    headerMode: 'screen',
    navigationOptions: navigation => ({
      headerStyle: {
        backgroundColor: ThemeColor.TOOLBAR_BACKGROUND,
        // paddingTop: ThemeSpacing.STATUS_BAR_HEIGHT,
        height: ThemeSpacing.TABBAR_HEIGHT,
        elevation: 0,
      },
      headerTitleStyle: {
        color: ThemeColor.TEXT_TITLE,
        fontSize: ThemeSpacing.FONT_SIZE,
      },
      headerBackTitleStyle: {
        color: ThemeColor.TEXT_TITLE,
      },
      headerTintColor: ThemeColor.TEXT_TITLE,
      ...navigation.navigationOptions,
    }),
  });
  return statckNavigator;
}

export default getStackNavigator;
