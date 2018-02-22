/**
* @providesModule CFRoutes
*/
import React, { Component, PureComponent } from 'react';
import { ThemeColor } from 'Theme'

import * as Screen from '../../module/screen';

// DEVICE_TYPE will return 'phone' or 'tablet'
import { DEVICE_TYPE } from '../setting';

const overrideProperty = (routes, generalType) => {
  Object.keys(routes).map(( screenKey, index ) => {
    const generalProperties = routes[screenKey][generalType]
    if (!routes[screenKey][DEVICE_TYPE]) routes[screenKey][DEVICE_TYPE] = {}
    const deviceTargetProperties = routes[screenKey][DEVICE_TYPE];
    Object.keys(generalProperties).map(( propertyKey, index) => {
      if (!deviceTargetProperties[propertyKey]) {
        deviceTargetProperties[propertyKey] = generalProperties[propertyKey]
      }
    })
  })
  return routes
}

const router = () => {
  const MainRoute = {
    Detail: {
      phone: {
        title: 'Detail',
        screen: Screen.DetailScreen,
      },
    },
    HomePage: {
      phone: {
        title: 'Dashboard',
        screen: Screen.HomePageScreen,
        icon: 'dashboard',
        tabBarLabel: 'Dashboard',
        barBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
        headerBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
      },
      tablet: {
        screen: Screen.HomePageTabletScreen,
      }
    },
    Contact: {
      phone: {
        title: 'Contact',
        screen: Screen.ContactScreen,
        icon: 'contacts',
        tabBarLabel: 'Contact',
        barBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
        headerBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
      },
      tablet: {
        screen: Screen.ContactTabletScreen,
      }
    },
    ChatPerson: {
      phone: {
        title: 'Chat',
        screen: Screen.ChatPersonScreen,
      },
 
    },
    Library: {
      phone: {
        title: 'Library',
        screen: Screen.LibraryScreen,
        icon: 'photo-library',
        tabBarLabel: 'Library',
        barBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
        headerBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,

      }
    },
    Profile: {
      phone: {
        title: 'Profile',
        screen: Screen.ProfileScreen,
        icon: 'people',
        tabBarLabel: 'Profile',
        barBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
        headerBackgroundColor: ThemeColor.PATIENT_TAB_COLOR,
      }
    },
    HoldingPlaceHolder: {
      phone: {
        screen: Screen.HoldingPlaceHolderScreen,

      }
    },
  }
  console.log('DEVICE_TYPE', DEVICE_TYPE)
  if (DEVICE_TYPE === 'tablet') {
    const TabletRoute =  overrideProperty(MainRoute, 'phone')
    console.log('DEVICE_TYPE', TabletRoute)
    return TabletRoute
  }
  return MainRoute
}

export default router;
