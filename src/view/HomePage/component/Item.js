/* @flow */

import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

var { height, width } = Dimensions.get('window');

export default class Item extends PureComponent {
  shouldComponentUpdate({isDisplayChildComponent}) {
    return isDisplayChildComponent !== this.props.isDisplayChildComponent;
  }
  render() {
    const { isDisplayChildComponent, item, onLoad, onPress } = this.props;
    console.log(">>>");
    return (
      <ShimmerPlaceholder
        duration={500}
        autoRun={true}
        widthLine={width * 0.8}
        width={width}
        height={150}
        isDisplayChildComponent={isDisplayChildComponent}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{ width, height: 150 }}
            source={item}
            onLoad={onLoad}
          />
        </TouchableOpacity>
      </ShimmerPlaceholder>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
