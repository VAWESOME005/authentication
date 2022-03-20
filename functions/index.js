const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.database()

exports.newUser = functions.auth.user().onCreate((user) => {
    return db
    .ref("/users/" + user.uid + '/').set({
        test: 'hello'
    })
        
})
