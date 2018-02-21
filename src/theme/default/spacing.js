import { Dimensions, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
let ratioXValue;
let ratioYValue;

if (width < 375) {
  ratioXValue = width < 320 ? 0.75 : 0.875;
} else {
  ratioXValue = 1;
}

if (height < 568) {
  ratioYValue = height < 480 ? 0.75 : 0.875;
} else {
  ratioYValue = 1;
}

const ratioX = ratioXValue;
const ratioY = ratioYValue;

// Set base font size =16
const basrUnit = 16;

// we're simulating EM by changing font size according to ratioX
const unit = basrUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

const logoHeight = em(6);
const logoWidth = em(9);
const statusBarHeight = StatusBar.currentHeight !== undefined
  ? StatusBar.currentHeight
  : 20;

const style = {
  // GENERAL
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1),
  PADDING_BIG: em(1.25),
  MARGIN: em(1),
  DOUBLE_MARGIN: em(2),
  MARGIN_MEDIUM: em(1.25),
  MARGIN_LARGER: em(1.5),
  MARGIN_LARGEST: em(1.75),
  MARGIN_SMALL: em(0.75),
  MARGIN_SMALLER: em(0.5),
  MARGIN_SMALLEST: em(0.25),
  BORDER: em(0.125),
  ELEVATION: 2,
  BORDER_BOTTOM_WIDTH: 4,
  STATUS_BAR_HEIGHT: statusBarHeight,
  GOLDEN_RATION_X_LEFT: (width * 1.0) / 2.62,
  GOLDEN_RATION_Y_TOP: (height * 1.0) / 2.62,
  QUARTER_DEVICE_WIDTH: width * 0.25,
  // navigator

  WIDTH_NAVIGATOR: 300,
  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.15),
  FONT_SIZE_BIGGER: em(1.25),
  FONT_SIZE_BIGGEST: em(1.5),
  FONT_WEIGHT_DESC: '300',
  FONT_WEIGHT_TITLE: '500',
  // TEXT fields
  TEXT_FIELD_HEIGHT: em(2.9),
  // TEXT_FIELD_BORDER:em(0.125),

  // Button
  BUTTON_HEIGHT: em(2.25),

  // LOGO
  LOGO_HEIGHT: logoHeight,
  LOGO_WIDTH: logoWidth,
  LOGO_BORDER: logoHeight / 2,
  // TAB BAR IOS
  TABBAR_HEIGHT: 50,

  // AVATAR
  SIZE_AVATAR: em(3.5),
  SIZE_AVATAR_PROVIDER: em(4.75),
  SIZE_AVATAR_BIG: em(6.5),
  // INFO
  INFO_HEADER_HEIGHT: em(4),
  // ICON
  ICON_SIZE: em(1.5),

  // PROFILE
  HEIGHT_PROFILE_HEADER: height * 0.35,
  HEIGHT_COVER_PROFILE: height * 0.2,
  // TOOLBAR_HEIGHT
  TOOLBAR_HEIGHT: em(2.5),

  // Z_INDEX
  Z_INDEX_HIGHTEST: 10,

  // INPUT
  HEIGHT_INPUT: em(3),

  // LINE
  HEIGHT_LINE: 3,
};

export default style;
