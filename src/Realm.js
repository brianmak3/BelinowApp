import Realm from 'realm';
export const usersSchema = 'belinowUsersSchema';
export const quickReplySchema = 'quickReplySchema';
export const chatSchema = 'chatSchema';
export const users_Schema = {
    name: usersSchema,
    primaryKey:'ID',
    properties:{
        ID: 'int',
        email: 'string',
        username: 'string',
        dateJoined:{type:'string', optional:true},
        socialLogin:{type:'string', optional:true},
        cartVisited:{type:'bool', optional:true},
        metaData:{type:'string', optional:true}
    }
}
export const chat_Schema = {
    name: chatSchema,
    primaryKey:'time',
    properties:{
                text:'string',
                from:'string',
                to:'string',
                media:'string',
                sentStatus:'string',
                time:'int',
                friend:'int'
        }
}
export const quickReply_Schema = {
    name: quickReplySchema,
    primaryKey:'ID', ///synch as meta data too
    properties:{
        ID: 'int',
        text: 'string'
    }
}
const databaseOptions = {
    path:'belinowApp.realm',
    schema:[users_Schema, quickReply_Schema, chat_Schema],
    schemaVersion:2
}
export const saveMessage = message => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        var chat = realm.objectForPrimaryKey(chatSchema, message.time);
        if(chat)
           alert('update chat')
         else
         realm.write(() =>{
            realm.create(chatSchema,message);
            resolve('saved');
        })
    }).catch((e)=>reject(e))
})
export const fetchChats = data => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm=>{
         var predicate = 'friend = "' +data.friendId +'"',
         chats = realm.objects(chatSchema).filtered(predicate).sorted('time', false)
         resolve(chats)
    }).catch((e)=>reject(e))
})
export const saveUser = user => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm =>{
        realm.write(() =>{
            realm.create(usersSchema,user);
            resolve(user);
        })
    }).catch((e)=>reject(e))
})
export const updateUser = user => new Promise((resolve, reject)=>{
     Realm.open(databaseOptions).then(realm=>{
         realm.write(()=>{
              let userUpdate = realm.objectForPrimaryKey(usersSchema, user.ID);
             if(user.cartVisited)userUpdate.cartVisited = user.cartVisited;
             if(user.socialLogin == true)userUpdate.socialLogin = '';
             if(user.metaData)userUpdate.metaData = user.metaData;
             resolve(userUpdate)
         })
     }).catch((e)=>reject(e))
})

export const findAllUsers = () => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        resolve(realm.objects(usersSchema))
    }).catch((e)=>{
        reject(e)
    })
})
export const deleteMessage    = message => new Promise((resolve, reject)=>{
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
           realm.delete(realm.objectForPrimaryKey(chatSchema, message.time));
        })
      }).catch((e)=>{
       reject(e)
    })
})
export const deleteUsers = () => new Promise((resolve,reject)=>{
    Realm.open(databaseOptions).then(realm=>{
         realm.write(()=>{
            realm.delete(realm.objects(usersSchema));
         })
    }).catch((e)=>{
        reject(e)
    })
})


