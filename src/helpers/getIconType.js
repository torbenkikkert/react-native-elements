const ZocialIcon = React.lazy(() => import('react-native-vector-icons/Zocial'));
const OcticonIcon = React.lazy(() => import('react-native-vector-icons/Octicons'));
const MaterialIcon = React.lazy(() => import('react-native-vector-icons/MaterialIcons'));
const MaterialCommunityIcon = React.lazy(() => import('react-native-vector-icons/MaterialCommunityIcons'));
const Ionicon = React.lazy(() => import('react-native-vector-icons/Ionicons'));
const FoundationIcon = React.lazy(() => import('react-native-vector-icons/Foundation'));
const EvilIcon = React.lazy(() => import('react-native-vector-icons/EvilIcons'));
const EntypoIcon = React.lazy(() => import('react-native-vector-icons/Entypo'));
const FAIcon = React.lazy(() => import('react-native-vector-icons/FontAwesome'));
const SimpleLineIcon = React.lazy(() => import('react-native-vector-icons/SimpleLineIcons'));
const FeatherIcon = React.lazy(() => import('react-native-vector-icons/Feather'));
const AntIcon = React.lazy(() => import('react-native-vector-icons/AntDesign'));

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  customIcons[id] = customIcon;
};

export default type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'feather':
      return FeatherIcon;
    case 'antdesign':
      return AntIcon;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};
