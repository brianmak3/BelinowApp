import {platform} from './Platform';
import Iconn from './Icon';
import {colors} from './colors';
import {Styles} from './Styles';

const icons = {
    forwardDrop: platform ==='android'?'arrow-dropright':'arrow-forward'
}
export {
    icons, 
    Iconn,
    colors,
    Styles
}