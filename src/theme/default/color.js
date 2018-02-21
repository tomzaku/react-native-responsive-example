const pallete = {
  primary: '#03A9F4',
  secondary: '#0277BD',
  third: '#00158b',
  complementary: '#52d717',
  bright: 'white',
  brightLower: '#f1f1f1',
  brightLowest: '#D3D3D3',
  brightLowerTransparent: 'rgba(232, 232, 232, 0.48)',
  warning: '#f5e735',
  error: '#de0317',
  success: '#33691e',
};
const text = {
  TEXT_TITLE: pallete.bright,
  TEXT_TITLE_INVERT: 'black',
  TEXT_SUBTITLE: '#797979',
};

const general = {
  // NAV
  ...pallete,
  NAV_BACKGROUND: pallete.bright,
  NAV_HEADER_BACKGROUND: pallete.primary,
  NAV_SELECT_ITEM: pallete.brightLower,
  NAV_ICON_SELECTED: pallete.primary,

  // AVATAR
  AVATAR_BORDER: pallete.bright,
  AVATAR_BORDER_WIDTH: 2,

  STATUS_COLOR_BEHIND: 'rgba(0, 0, 0, 0.62)',
  // STATUS_BACKGROUND:pallete.primary,
  STATUS_BACKGROUND: pallete.secondary,
  HEADER_BACKGROUND: pallete.primary,

  // BAr Icon
  TOOLBAR_ICON: pallete.bright,
  //
  TAB_TITLE_SELECTED: pallete.bright,
  TAB_TITLE: pallete.brightLower,
  TAB_UNDERLINE: 'navy',
  ...text,

  // ProviderListScreen
  BACKGROUND_COLOR: 'rgba(154, 154, 154, 0.29)',

  // ProfileScreen
  BACKGROUND_HEADER_PROFILE: pallete.secondary,

  // TOOL BAR
  TOOLBAR_BACKGROUND: pallete.primary,
  // Spinner
  SPINNER: pallete.primary,
  LABEL_TEXT_INPUT: '#525252',
  TEXT_INPUT_VALUE: '#191919',
  BORDER_LINE: '#8f8f8f',

  // BOTTOM TAB BAR AND STATUS BAR(only tablet)
  PRACTITION_TAB_COLOR: pallete.secondary,
  PATIENT_TAB_COLOR: pallete.secondary,
  // PATIENT_TAB_COLOR: '#0DADED',
  ORGANIZATION_TAB_COLOR: pallete.secondary,
  // ORGANIZATION_TAB_COLOR: '#007668',
  PROFILE_TAB_COLOR: pallete.secondary,
  // PROFILE_TAB_COLOR: '#D6600C',
  MENU_TAB_COLOR: pallete.secondary,
  APP_TAB_COLOR: '#555',
  // MENU_TAB_COLOR: '#555',

};

export default general;
