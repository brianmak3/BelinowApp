import RNFS from 'react-native-fs'
const ROOT_PATH                     =  RNFS.DocumentDirectoryPath
const WHISLIST_FILENAME             = 'whislist.tmp' 
const COOKIE_FILE                   = 'cookie.tmp' 
const CUSTOMER_FILENAME             = 'customer.tmp' 

const write = (filename, content) => {
    let path = ROOT_PATH + '/' + filename;
    return RNFS.writeFile(path, content, 'utf8').then(() => {
        return true;
    })
}

const read = async (filename) => {
    let path = ROOT_PATH + '/' + filename;
    const exists = await RNFS.exists(path); 
    if (exists) {
        const content = await RNFS.readFile(path, 'utf8')
        if (content.length === 0){
            return undefined
        }
        return content
    } else {
        return undefined
    }
}

const remove = async (filename) => {
    let path = ROOT_PATH + '/' + filename;
    const exists = await RNFS.exists(path);
    if (exists) {
        const result = await RNFS.unlink(path);
        return result
    }
    return false
}


export default {

    logout(){
        remove(WHISLIST_FILENAME);
        remove(COOKIE_FILE); 
        remove(CUSTOMER_FILENAME); 
    },

    erase(){
        remove(WHISLIST_FILENAME);
        remove(COOKIE_FILE);
        remove(CUSTOMER_FILENAME); 
    },


    getWhislist() {
        return read(WHISLIST_FILENAME);
    },

    saveWhislist(content) {
        return write(WHISLIST_FILENAME, content)
    },

    removeWhislist(){
        return remove(WHISLIST_FILENAME)
    }, 
 

    getCookie() {
        return read(COOKIE_FILE);
    },

    saveCookie(content) {
        return write(COOKIE_FILE, content)
    },

    removeCookie() {
        return remove(COOKIE_FILE)
    },


    getCustomer() {
        return read(CUSTOMER_FILENAME);
    },

    saveCustomer(content) {
        return write(CUSTOMER_FILENAME, content)
    },

    removeCustomer() {
        return remove(CUSTOMER_FILENAME)
    },
}



