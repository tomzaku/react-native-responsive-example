/**
* @providesModule TwoColumn
*/

// import liraries

import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ThemeColor, ThemeSpacing } from 'Theme';
import _ from 'lodash';
import getStackNavigator from '../../routerBuilder';

// create a component
class TabletNavigation extends Component {
  constructor(props) {
    super(props);
    this.FindRightNavigation = getStackNavigator(this.props.idNavRight);
    const prevGetStateForActionFindRightNavigation = this.FindRightNavigation.router.getStateForAction;
    this.FindRightNavigation.router.getStateForAction = (action, state) => {
      if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
          ...state, 
          routes,
          index: routes.length - 1,
        };
      }
      return prevGetStateForActionFindRightNavigation(action, state);
    }
    this.state = {
      rightNav: {
      },
    };
  }
  render() {
    const { navigation, leftComponent } = this.props;
    // let LeftComponent = FindComponent.tabletScreen ? FindComponent.tabletScreen : FindComponent.screen;
    const RightComponent = this.FindRightNavigation;
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {leftComponent(this.state.rightNav)}
        </View>
        <View style={styles.rightContainer}>
          <RightComponent
            style={{ marginTop: -10 }}
            ref={rightNav => !this.state.rightNav._navigation && this.setState({ rightNav })}
            initialRouteName={this.props.idNavRight}
          />
        </View>
      </View>
    );
  }
}
TabletNavigation.defaultProps = {
  idNavRight: 'HoldingPlaceHolder',
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 11,
    // backgroundColor: 'white',
    zIndex: 99999999,
  },
  rightContainer: {
    flex: 16,
    backgroundColor: 'red',
  },
});

// make this component available to the app
export default TabletNavigation;
