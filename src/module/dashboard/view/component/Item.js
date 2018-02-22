/* @flow */

import React, { PureComponent, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import randomColor from 'randomcolor'
let { height, width } = Dimensions.get('window');
const widthDevice = width

export default class Item extends Component {
  shouldComponentUpdate({visible}) {
    return visible !== this.props.visible;
  }
  render() {
    const { visible, item, onLoad, onPress, width=widthDevice, height= 150 } = this.props;
    const outsideColor = randomColor({luminosity: 'light', })
    // const centerColor = randomColor({luminosity: 'bright', })
    const centerColor = 'white'

    return (
      <ShimmerPlaceholder
        duration={1600}
        autoRun={true}
        colorShimmer={[outsideColor, centerColor, outsideColor]}
        widthShimmer={0.0005}
        width={width}
        height={height}
        visible={visible}
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{ width, height }}
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
