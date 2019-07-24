// FONTS 
// const extraLightFont = 'SourceSansPro-ExtraLight';
// const lightFont = 'SourceSansPro-Light';
// const regularFont = 'SourceSansPro-Regular';
// const semiBoldFont = 'SourceSansPro-SemiBold';
// const boldFont = 'SourceSansPro-Bold';

// FONTS 
const extraLightFont = 'SFUIDisplay-UltraLight'
const lightFont = 'SFUIDisplay-Light'
const regularFont = 'SFUIDisplay-Regular'
const semiBoldFont = 'SFUIDisplay-SemiBold'
const boldFont = 'SFUIDisplay-Bold'
const mediumFont = 'SFUIDisplay-Medium'

// COLORS
const primaryColor = '#121314';
const mainColor = '#FAA857';
const primaryMoreColored = '#e42a00';
const secondaryColor = '#9B9B9B';
const backgroundColor = '#fff';
const greyColor = '#9B9B9B';
const white = '#FFFFFF';
const defaultButtonBorderColor = '#D8D8D8';
const loadingWrap = {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
}
// HEADER 
const headerStyle = {
    backgroundColor: mainColor,
    // ------ Remove the header border(shadow). 
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: { height: 0 },
    elevation: 0,
    borderBottomWidth: 0,
}
const headerTitleStyle = {
    fontFamily: mediumFont,
    color: white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 1, 
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1
}


export default {

    // FONTS
    extraLightFont,
    lightFont,
    regularFont,
    boldFont,
    semiBoldFont,
    
    mediumFont,

    // COLORS 
    primaryColor,
    secondaryColor,
    backgroundColor,
    greyColor,
    primaryMoreColored,
    white,
    
    // HEADER
    headerStyle,
    headerTitleStyle,

    loadingWrap,
    defaultButtonBorderColor
    

}