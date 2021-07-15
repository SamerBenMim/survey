
const admin = require('firebase-admin');
admin.initializeApp(
);
export function fn(){
    admin
    .auth()
    .getUserByEmail('admin@admin.admin')
    .then((user) => {console.log('enfin')
      if (user.emailVerified) {
        return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

}
