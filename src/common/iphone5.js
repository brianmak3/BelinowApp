import { Dimensions, Platform } from 'react-native';

const isIphone5 = () => {
    let d = Dimensions.get('window');
    const { height, width } = d;

    return (
        // This has to be iOS duh
        Platform.OS === 'ios' &&

        // Accounting for the height in either orientation
        (height === 568 || width === 320)
    );
}

export default isIphone5;