import React from 'react';
import { connect } from 'react-redux';
//import { updateUser } from './Realm';
const dat = {
    user:0,
    metaData:'',
    currentFriendId:58
  }
const initialState = dat;
export const reducer = (state = initialState, action)=>{
    switch(action.type){
       case 'setUser':
         //updateUser(action.user).then().catch(e=>alert(e));
         return {...state,user: action.user}
        case 'setMetaData':
         return {...state,metaData: action.data}
    }
    return state;
  }
class Redux extends React.Component{
  constructor(props){
      super(props)
  }
 returnCounter(){
   return this.props.state;
}
render(){return null}

}
export const Connect = connect;
export const  mapStateToProps = (state)=>{
    return {
        user: state.user,
        state:state,
        metaData: state.metaData,
        currentFriendId:state.currentFriendId
      }
 }
 export const  mapDispatchToProps = (dispatch)=>{
        return {
            setMetaData: (data) => dispatch({type:'setMetaData',data:data}),
            setUser: (user) => dispatch({type:'setUser',user:user})
            
        }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Redux);