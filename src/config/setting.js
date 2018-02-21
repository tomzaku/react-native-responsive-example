import DeviceInfo from 'react-native-device-info';

export const DEVICE_TYPE = DeviceInfo.getModel().indexOf('iPad') > -1  || DeviceInfo.isTablet() ? 'tablet' : 'phone';
