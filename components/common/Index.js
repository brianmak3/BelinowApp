import {Styles} from './Styles';
import {colors} from './colors';
import Header from './Header';
import Icon1, {getIndex} from './Icon';
import {Platform} from 'react-native';
const platform = Platform.OS;
const icons = {
    forwardDrop: platform ==='android'?'arrow-dropright':'arrow-forward'
}
export {
    colors, Header,getIndex, Icon1, Styles,icons 
}