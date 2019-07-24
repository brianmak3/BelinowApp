import * as types from '../types'
import fsManager from '../../common/fs-manager'
 
/**
 * Register customer. Uses JSON-API-USER
 * https://wordpress.org/plugins/json-api-user/
 * @param {string} first_name 
 * @param {string} last_name 
 * @param {string} email 
 * @param {string} user_name 
 * @param {string} password 
 */
export function register(first_name, last_name, email, user_name, password) {
    const promise = new Promise(function (resolve, reject) {
        const nonceURL = types.getNonceURL("user", "register")
        let registerURL = types.getRegisterURL()
        // GET nonce value for register user.
        function getNonce() {
            fetch(nonceURL)
                .then(res => res.json())
                .then(json => {
                    if (json.status === "ok") {
                        regiterUser(json.nonce)
                    } else {
                        return reject(json.error)
                    }
                })
                .catch(err => {
                    reject(err.message)
                })
        }
        // GET customer and save.
        function saveUser(json) {
            fsManager.saveCookie(json.cookie).then(() => {
                let customerURL = types.getCustomerURL(json.user_id)
                fetch(customerURL)
                    .then(res => res.json())
                    .then(json => {
                        fsManager.saveCustomer(JSON.stringify(json)).then(() => {
                            resolve("success")
                        }).catch((err) => {
                            reject(err)
                        })
                    })
                    .catch(err => {
                        reject(err.message)
                    })
            }).catch((err) => {
                reject(err.message)
            })
        }
        // GET register user
        function regiterUser(nonce) {
            registerURL += `nonce=${nonce}&username=${user_name}&display_name=${first_name + ' ' + last_name}&email=${email}&user_pass=${password}`
            fetch(registerURL)
                .then(res => res.json())
                .then(json => {
                    if (json.status === "ok") {
                        saveUser(json);
                    } else {
                        reject(json.error)
                    }
                })
                .catch(err => {
                    reject(err.message)
                })
        }
        getNonce();
    }); 
    return promise;
} 

/**
 * Login customer. Uses JSON-API-USER
 * https://wordpress.org/plugins/json-api-user/
 * @param {string} loginName 
 * @param {string} password 
 */
export function login(loginName, password) {
    const promise = new Promise(function (resolve, reject) {
        const nonceURL = types.getNonceURL("user", "generate_auth_cookie")
        // GET customer and save.
        function saveUser(json) {
            fsManager.saveCookie(json.cookie).then(() => {
                let customerURL = types.getCustomerURL(json.user.id)
                fetch(customerURL)
                    .then(res => res.json())
                    .then(json => {
                        fsManager.saveCustomer(JSON.stringify(json)).then(() => {
                            resolve("success")
                        }).catch((err) => {
                            reject(err)
                        })
                    })
                    .catch(err => {
                        reject(err.message)
                    })
            }).catch((err) => {
                reject(err.message)
            })
        }
        // GET customer login
        function loginUser(nonce){
            let loginURL = types.getLoginURL(nonce);
            loginURL += `username=${loginName}&password=${password}`
            fetch(loginURL)
                .then(res => res.json())
                .then(json => {
                    if (json.status === "ok") {
                        saveUser(json)
                    } else {
                        return reject(json.error)
                    }
                })
                .catch(err => {
                    reject(err.message)
                })
        }
        // GET nonce value for generate_auth_cookie
        function getNonce() {
            fetch(nonceURL)
                .then(res => res.json())
                .then(json => {
                    if (json.status === "ok") {
                        loginUser(json.nonce)
                    } else {
                        return reject(json.error)
                    }
                })
                .catch(err => {
                    reject(err.message)
                })
        }
        getNonce()
    });
    return promise;
}


/**
 * Is authorized user?
 * User when need authroization to user.
 * Get promise and resolve the action if not valid open login modal.
 */
export function isLogged() {
    const promise = new Promise(function (resolve, reject) {
        fsManager.getCookie().then((cookievalue) => {
            if (cookievalue === undefined) {
                reject()
            } else {
                const validateCookieURL = types.getValidateCookieURL(cookievalue);
                fetch(validateCookieURL)
                    .then(res => res.json())
                    .then(json => {
                        if (json.status === "ok" && json.valid === true) {
                            resolve()
                        } else {
                            reject()
                        }
                    })
                    .catch(err => {
                        reject()
                    })
            }
        }).catch((err) => {
            reject()
        })
    });
    return promise;
}



/**
* Update user address
* Remote and local file.
*/
export function updateUserAddress(id, address) {
    const promise = new Promise(function (resolve, reject) {
        let url = types.getCustomerURL(id)
        fetch(url,
            {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(address),
            })
            .then(res => res.json())
            .then(json => {
                fsManager.saveCustomer(JSON.stringify(json)).then( () => {
                    resolve()
                }).catch( () => {
                    reject()
                })
            })
            .catch(err => {
                reject()
            })
    });
    return promise;
}
 