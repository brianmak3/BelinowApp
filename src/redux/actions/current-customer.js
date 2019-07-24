import *  as types from '../types'
import { apiData } from '../../Functions';
import { updateUser } from '../../Realm'

export function setCurrentCustomer(user, resaveUser) {
    if(!resaveUser)
    updateUser(user)
    return (dispatch)=>{
        if (user !== undefined) {
           dispatch({ type: types.GET_CURRENT_CUSTOMER, data: user })
        }

    }
}


export function logout() {
    return (dispatch) => {
        dispatch({ type: types.GET_CURRENT_CUSTOMER, data: {} })
    }
}

export const fetchAndUpdate  = customer => new Promise ((resolve, reject)=>{
    const {ID} = customer;
    apiData({
        action: 'fetchMetaData',
        userId:ID
    }).then((res)=>{
        customer = {...customer},
        customer = {...customer,metaData:JSON.stringify(res)}
        resolve(customer)
    })
})