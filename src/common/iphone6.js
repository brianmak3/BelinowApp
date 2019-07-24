import { Dimensions, Platform } from 'react-native';

const isIphoneX = () => {
    let d = Dimensions.get('window');
    const { height, width } = d;

    return (
        width <= 375
    );
}

export default isIphoneX;