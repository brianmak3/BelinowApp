import React, { Component } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Dimensions,
    ImageBackground
} from "react-native"

import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Theme from '../../theme/style'
import SearchButton from '../../theme/searchButton'
import styles from './style'
import MenuButton from '../../theme/menuButton'
import * as ProductAction from '../../redux/actions/products'
import * as WhislistAction from '../../redux/actions/whislist'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const width = Dimensions.get('window').width
const padd = 15
const columns = 2

class CategoryScreen extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            index: 0,
            routes: [],
            scenes: []
        }
    }

    componentWillMount() {
        const { categories } = this.props
        let routes = [] 
        categories && categories.parents.map((item) => (
            routes.push({
                key: 'tab_' + item.id,
                title: item.name.toUpperCase()
            }) 
        ))
        this.setState({ routes })
    }

    _handleIndexChange = index => this.setState({ index });

    _renderTabBar = props => {

        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {props.navigationState.routes.map((route, i) => {
                        const color = Animated.color(
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 7 : 7
                                    ),
                                })
                            ),
                            7,
                            8
                        );
                        return (
                            <TouchableOpacity
                                key={i}
                                style={styles.tabItem}
                                onPress={() => this.setState({ index: i })}>
                                <Animated.Text style={[{ color }, styles.tabHeaderButtonText]}>{route.title}</Animated.Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>

            </View>
        );
    };
 

    getSceneMap = () => {
        const { categories } = this.props
        let sceneMap = {} 
        categories && categories.parents.map((item) => {
            sceneMap['tab_' + item.id] = () => {
                return this._renderTabContent(item)
            }
        })

        return sceneMap
    }

    _renderScene = SceneMap(this.getSceneMap())

    _renderTabContent(category) {
        const { categories, navigation } = this.props
        const data = categories.data.filter(x => x.parent == category.id).sort(x => x.count)
        const imageWidth = ((width - (padd * columns)) / columns) - (padd / columns)
        return (
            <FlatList
                style={{backgroundColor: '#FFF'}}
                data={data}
                numColumns={columns}
                keyExtractor={(item, index) => { return `${item.name}-${index}` }}
                renderItem={({ item, index }) => {
                    return (
                        !item ? null :
                            <TouchableOpacity key={index}
                                style={styles.tabContentButton}
                                onPress={() => { navigation.navigate('CategoryProductsScreen', { item }) }}>

                                {
                                    item.image ?
                                        <ImageBackground
                                            source={{ uri: item.image.src }}
                                            resizeMode={'cover'}
                                            style={{ width: imageWidth, height: 200, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.tabContentText}>{item.name.toUpperCase()}</Text>
                                            <Text style={styles.tabContentTextCount}>{item.count} items</Text>
                                        </ImageBackground>

                                        :

                                        <View
                                            style={{ backgroundColor: '#E6E8EC', width: imageWidth, height: 200, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={styles.tabContentText2}>{item.name.toUpperCase()}</Text>
                                            <Text style={styles.tabContentTextCount2}>{item.count} items</Text>
                                        </View>
                                }


                            </TouchableOpacity>
                    )
                }}
            />
        )
    }
     
    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
            />
        );
    }

 

}

CategoryScreen.navigationOptions = ({ navigation }) => ({
    title: 'CATEGORY',
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <MenuButton navigation={navigation} />,
    headerRight: <SearchButton navigation={navigation} />
})

function mapStateToProps(state) {
    return {
        categories: state.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
        WhislistAction: bindActionCreators(WhislistAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)