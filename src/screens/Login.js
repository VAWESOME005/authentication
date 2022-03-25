import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

GoogleSignin.configure({
  iosClientId: '765657848640-57age4mucn3uhmoiu11hemf94td9v38j.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});

export default LoginScreen = () => {


  const onGoogleLogin = async () => {
    
    await GoogleSignin.hasPlayServices();

    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const result = await auth().signInWithCredential(googleCredential);

    console.log(result)

    const data = await database().ref('/users/' + result.user.uid).set(
                {
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  locale: result.additionalUserInfo.profile.locale,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  current_theme: "dark", 
                  date: ""   
                }
              )

    console.log(data)

    Alert.alert('Alert', 'Added Successfully in Firebase Database', [{text: "OK"}])
  }

 
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} /> 
      <View style={styles.appTitle}> 
        <Text style={styles.appTitleText}>{`Mood Setter\nApp`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => this.signInWithGoogleAsync()}
          onPress={()=>onGoogleLogin()}
        >

          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cloudContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
  appTitle: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 130,
    height: 130,
    resizeMode: "contain"
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white"
  },
  googleIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  googleText: {
    color: "black",
    fontSize: 20,
  },
  cloudContainer: {
    flex: 0.3
  },
  cloudImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
    bottom: -5
  }
});