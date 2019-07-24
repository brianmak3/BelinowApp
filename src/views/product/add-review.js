import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";

import StarRating from 'react-native-star-rating';
import Theme from '../../theme/style'
import BackButton from '../../theme/back'
import FormStyle from '../../theme/form'
import ModalHeader from "../../components/ModalHeader";
import { DropDownHolder } from '../../common/dropalert'
import Loading from '../../common/loading'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/products'

class AddReview extends Component {

    constructor(props) {
        super(props)
        this.loading = false
        this.state = {
            comment: undefined,
            inputFocused: false,
            starCount: 5
        }
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.createReview !== undefined){
            const cr = nextProps.createReview
            if (cr.error === true){
                DropDownHolder.alert('error', 'Error', cr.errorMessage)
            } else if (cr.data.id !== 0) {
                const { navigation } = this.props
                const product_id = navigation.getParam('product_id');
                this.props.ProductAction.getProductReviews(product_id);
                DropDownHolder.alert('success', 'Successfull', 'Your review has been submited successfully.');
                navigation.goBack();
            }
        }
    }

    submitReview() {
        if (this.loading === false){
            this.loading = true
            const { currentCustomer, navigation } = this.props
            const { comment, starCount } = this.state
            const formIsValid = this.validateAndSetAttribute(comment, this._commentEntry)
            const product_id = navigation.getParam('product_id')
            if (formIsValid) {
                this.props.ProductAction.addProductReview({
                    review: comment,
                    rating: starCount,
                    product_id: product_id,
                    reviewer: currentCustomer.customer.username,
                    reviewer_email: currentCustomer.customer.email
                })
            } else {
                DropDownHolder.alert('error', '', 'Please enter your comment.')
            }
            this.loading = false
        }
    }

    validateInput(input) {
        if (input === undefined)
            return false
        else if (input === '')
            return false
        else if (input.trim() === '')
            return false
        else if (input === 0)
            return false
        else
            return true
    }

    validateAndSetAttribute(value, attribute) {
        const valid = this.validateInput(value)
        const borderColor = !valid ? 'red' : '#E8E8E8';
        attribute.setNativeProps({
            style: { borderColor }
        });
        return valid
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        const { navigation, createReview } = this.props

        return (
            <KeyboardAvoidingView behavior="height" style={styles.container}>
                <ModalHeader close={true} headerTitle={'Add Review'} navigation={navigation} />
                <View style={styles.pageContent}>
                    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                        <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                            <Text style={styles.label}>{'Rating'}</Text>
                        </View>
                        <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                            <StarRating
                                fullStarColor={Theme.primaryColor}
                                halfStarColor={Theme.primaryColor}
                                disabled={false}
                                starSize={28}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </View>
                        <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                            <Text style={styles.label}>{'Comment'}</Text>
                        </View>
                        <View style={[FormStyle.formGroup, FormStyle.formGroupLessPadd]}>
                            <TextInput placeholderTextColor={Theme.secondaryColor} 
                            maxLength={500} 
                            autoCorrect={false} 
                            multiline={true} 
                            underlineColorAndroid={'transparent'}
                            style={[FormStyle.input, 
                            {
                                textAlignVertical: "top",
                                paddingLeft: 15,
                                paddingTop: 15,
                                paddingBottom: 15,
                                paddingRight: 15,
                                height: 150,
                                width: '100%',
                                marginBottom: 20,
                                borderWidth: 0.75,
                                borderColor: '#e8e8e8'
                            }]} 
                            ref={(comment) => { this._commentEntry = comment}}
                            onChangeText={ (comment) => { this.setState({ comment })}} 
                            />
                        </View>
                    </ScrollView>
                </View>

                {createReview.loading === true && <Loading /> }

                {createReview.loading === false && !this.state.inputFocused && <View style={FormStyle.bottomButton}>
                    <TouchableOpacity style={FormStyle.submitButton} onPress={() => { this.submitReview() }}>
                        <Text style={FormStyle.submitButtonText}>{'SUBMIT'}</Text>
                    </TouchableOpacity>
                </View>}

            </KeyboardAvoidingView>
        );
    }

    // keyboardDidShow = () => {
    //     this.setState({ inputFocused: true })
    // }
    // keyboardWillShow = () => {
    //     this.setState({ inputFocused: true })
    // }
    // keyboardWillHide = () => {
    //     this.setState({ inputFocused: false })
    // }
    // keyboardDidHide = () => {
    //     this.setState({ inputFocused: false })
    // }
}

AddReview.navigationOptions = ({ navigation }) => ({
    title: 'Add Review',
    headerStyle: Theme.headerStyle,
    headerTitleStyle: Theme.headerTitleStyle,
    headerLeft: <BackButton navigation={navigation} />
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingTop: 0
    },
    pageContent: {
        marginTop: 0
    }, 
})

function mapStateToProps(state) {
    return {
        currentCustomer: state.currentCustomer,
        createReview: state.createReview
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ProductAction: bindActionCreators(ProductAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
