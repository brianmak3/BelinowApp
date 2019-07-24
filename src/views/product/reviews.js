import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
} from "react-native";

import Theme from '../../theme/style'
import HTMLView from 'react-native-htmlview'
import StarRating from '../../components/StarRating'
import moment from 'moment'
import Loading from "../../common/loading";
import ModalHeader from "../../components/ModalHeader";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/products'

class ProductReviews extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { navigation } = this.props 
        const product_id = navigation.getParam('product_id');
        this.props.ProductAction.getProductReviews(product_id)
    }

    componentDidMount() {
        StatusBar.setHidden(false, 'slide');

    }

    componentWillUnmount(){
        StatusBar.setHidden(true, 'none');
    }

    render() {
        const { productReviews, navigation, currentCustomer } = this.props
        const product_id = navigation.getParam('product_id');
        return (
            <View style={Styles.container}>  
                <ModalHeader add={'AddReviewScreen'} back={false} close={true} headerTitle={'Reviews'} 
                    navigation={navigation} user={currentCustomer.customer} product_id={product_id} /> 
                {productReviews.loading ? <View style={Theme.loadingWrap}><Loading /></View> : null} 
                {productReviews.data.length > 0? 
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <View style={Styles.productReviews}>
                            {productReviews.data.map((r, i) => {
                                return <View key={i} style={Styles.review}>
                                    <View style={Styles.reviewAvatar}>

                                    </View>
                                    <View style={Styles.reviewBox}>
                                        <View style={Styles.reviewerRate}>
                                            <View style={Styles.reviewer}>
                                                <Text style={Styles.reviewerText}>{r.reviewer}</Text>
                                            </View>
                                            <View style={Styles.rates}>
                                                <StarRating ratingObj={{ ratings: r.rating }} />
                                            </View>
                                        </View>
                                        <View style={Styles.reviewComment}>
                                            <HTMLView addLineBreaks={false} value={r.review} stylesheet={ReviewerContentHtmlStyles} />
                                        </View>
                                        <Text style={Styles.reviewDateCreated}>{moment(r.date_created).format('MM-DD-YYYY HH:ss')}</Text>
                                    </View>
                                </View>
                            })}
                        </View>
                </ScrollView> 
                : productReviews.loading === false ? <View style={Theme.loadingWrap}><Text style={Styles.noDataText}>{'Not reviewed yet.'}</Text></View> : null}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        productReviews: state.productReviews,
        currentCustomer: state.currentCustomer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch)
    };
}

const ReviewerContentHtmlStyles = StyleSheet.create({ 
    p: {
        fontFamily: Theme.lightFont,
        fontSize: 13.5,
        lineHeight: 24,
        color: Theme.primaryColor,
        letterSpacing: 1,
        textAlign: 'left',
        marginBottom: -25
    }

});

const Styles = StyleSheet.create({
    // Rewviews

    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    productReviews: {
        padding: 15

    },
    review: {
        paddingBottom: 10,
        marginBottom: 15,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1
    },
    reviewAvatar: {

    },
    reviewBox: {
        padding: 0
    },
    reviewerRate: {
        flexDirection: 'row',
        marginBottom: 10
    },
    reviewer: {
        flex: 0.7,
    },
    reviewerText: {
        fontSize: 15,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontFamily: Theme.mediumFont,
        color: Theme.primaryColor
    },
    rates: {
        flex: 0.3,
        alignItems: 'flex-end'
    },
    reviewDateCreated: {
        fontSize: 11,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontFamily: Theme.lightFont,
        color: Theme.primaryColor
    },
    noDataText:{
        fontSize: 15,
        lineHeight: 19,
        letterSpacing: 0.5,
        fontFamily: Theme.regularFont,
        color: Theme.primaryColor
    }
 
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);