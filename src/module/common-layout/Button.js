/* @flow */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeSpacing } from 'Theme';

export default class CFButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { onPress, title } = this.props;
    if (onPress) {
      onPress(title);
    }
  }

  render() {
    const text = this.props.title || this.props.children;
    const { info, disabled, style, styleText, backgroundColor, leftComponent, leftStyle, rightComponent, rightStyle, success, large } = this.props
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.button,
          large ? styles.large : {},
          info ? styles.info : {},
          success ? styles.success : {},
          backgroundColor ? { backgroundColor } : {},
          style,
          ]}
        onPress={this.props.onPress}
        underlayColor={this.props.underlayColor
        ? this.props.underlayColor
        : 'rgba(154, 154, 154, 0.8)'}
      >
        <View style={[
          styles.leftRightComponent,
          leftStyle
        ]}>
        {leftComponent()}
        </View>
        <Text style={[
          styles.text,
          large ? styles.largeText : {},
          success ? styles.successText: {},
          info ? styles.infoText: {},
          styleText
          ]}>{text}</Text>
        <View style={[
          styles.leftRightComponent,
          rightStyle
        ]}>
        {rightComponent()}
        </View>
      </TouchableOpacity>
    );
  }
}
CFButton.defaultProps = {
  leftStyle: {},
  rightStyle: {},
  leftComponent: () => null,
  rightComponent: () => null,
}
CFButton.propTypes = {
  style: PropTypes.any,
  styleText: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  underlayColor: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    padding: ThemeSpacing.MARGIN_SMALLER,
    backgroundColor: 'black',
    elevation: 2,
    // borderRadius: 3,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  success: {
    backgroundColor: '#0CA84B'
  },
  info: {
    backgroundColor: '#00A1B7',
  },
  successText: {
    color: 'white',
  },
  infoText: {
    color: 'white',
  },
  large: {
    // paddingTop: ThemeSpacing.MARGIN,
    // paddingBottom: ThemeSpacing.MARGIN,
  },
  leftRightComponent: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: ThemeSpacing.FONT_SIZE_BIGGER,
    paddingTop: ThemeSpacing.MARGIN_SMALL,
    paddingBottom: ThemeSpacing.MARGIN_SMALL,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    paddingLeft: ThemeSpacing.MARGIN,
    paddingRight: ThemeSpacing.MARGIN,
  },
});

