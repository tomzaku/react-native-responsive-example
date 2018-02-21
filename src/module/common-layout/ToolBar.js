//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeColor, ThemeSpacing } from 'Theme';

// create a component
class ToolBar extends PureComponent {
  render() {
    const { title, icon, onPress, style } = this.props;
    return (
      <View style={[styles.header, style]}>
        {/* <Icon
          name={icon}
          color={'white'}
          size={18}
        /> */}
        <Text style={styles.titleHeader}>
          {title}
        </Text>
        {/* {onPress
          ? <Icon
            name={'edit'}
            color={'white'}
            size={18}
            onPress={onPress}
          />
          : null
        } */}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  titleHeader: {
    color: 'white',
    // marginLeft: ThemeSpacing.MARGIN,
    fontSize: ThemeSpacing.FONT_SIZE + 1,
    fontWeight: ThemeSpacing.FONT_WEIGHT_TITLE,
  },
  header: {
    flexDirection: 'row',
    paddingTop: ThemeSpacing.STATUS_BAR_HEIGHT,
    backgroundColor: ThemeColor.secondary,
    height: ThemeSpacing.TABBAR_HEIGHT + ThemeSpacing.STATUS_BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderColor: 'rgba(170, 170, 170, 0.827)',


  },
});

//make this component available to the app
export default ToolBar;
