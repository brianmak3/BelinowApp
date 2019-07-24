import React from "react";
import { 
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

const MenuButton = (props) => (
    <TouchableOpacity style={styles.button} 
            onPress={() => props.navigation.openDrawer()}>
        <Image resizeMode={'contain'} source={require('../assets/images/menu.png')} 
//            style={{ width: 18, height: 12.2 }}
            style={{ width: 18, height: 15 }}
             />
    </TouchableOpacity>
    )
export default MenuButton;

const styles = StyleSheet.create({
    button: {
        width: 60,
        paddingLeft: 15,
        justifyContent: 'center'
    },
});