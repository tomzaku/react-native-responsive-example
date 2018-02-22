//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { ThemeColor, ThemeSpacing } from 'Theme';

import ToolBar from '../../common-layout/ToolBar'
import TwoColumn from '../../../config/navigation/view/tablet/TwoColumn'
import HomePageScreen from './HomePageScreen'


class HomePageTabletScreen extends HomePageScreen {

  onPressItem(item) {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Detail', params: { item } }),
      ],
    });
    navigation.dispatch(resetAction);
  }
}

// create a component
class HomPageTwoColumn extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  leftComponent = (navigation) => {
    return (
      <View style={{flex: 1}}>
        <ToolBar title={'Dashboard'} style= {{ backgroundColor: ThemeColor.PATIENT_TAB_COLOR }}/>
        <HomePageTabletScreen navigation={navigation} />
      
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TwoColumn
          leftComponent={this.leftComponent}
          idNavRight={'HoldingPlaceHolder'}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default HomPageTwoColumn;
