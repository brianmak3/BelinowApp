import React, { Component } from "react";
import { 
    View, 
    TouchableOpacity,
    Image,
    FlatList
} from "react-native"

import Loading from "../common/loading";
import Styles from './style';
import { colors } from "../common/colors";
import Info from './Info';



class itemsView extends Component {
    renderitems(){
        const { navigation, data, whislist, showList} = this.props;
        return(
            <FlatList key={showList?'flatlist':null} numColumns={showList?1:2} style={{backgroundColor:colors.background}} data={data} renderItem={({item,index})=> {
                       item = whislist ? item.item : item
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ProductScreen", { product: item })} underlayColor="white" style={showList?Styles.gridItem: Styles.productDiv} key={index}>
                               <View style={{alignItems:'center'}}>
                                     <Image style={showList?Styles.gridImage:Styles.productImg} source={{ uri: item.images[0].src }}/>
                               </View>
                          <Info item={item} showList={showList}/>
                        </TouchableOpacity>
                      )
                      
            }}
            />
        )
    }
    render() {
        const { data, loading } = this.props;
        return (
            <View style={Styles.view}>
                {loading ? <Loading /> : null} 
                {data && this.renderitems()}
                 
            </View>
          
        )
    }

}
 

export default itemsView