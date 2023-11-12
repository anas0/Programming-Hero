/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm install firebase
 * 5. add config file to your project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github 
 * 7. visit: go to Docs > Build > Authentication > web > Ged Started 
 * 8. export app from firebase.init.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. Create: const auth = getAuth(app)
 * 11. import GoogleAuthProvider new create provider
 * 12. use signInWithPopUp and pass auth and provider
 * 13. activate sing in method (google, facebook, etc.)
 **/