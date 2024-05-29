import React from 'react'
import {View, Text} from "react-native"

function Profile() {
  return (
    <View style={{flex: 1, alignItems: "center", alignContent: "center", backgroundColor: "aqua", padding: "2rem"}}>
        <img style={{borderRadius: "100%", width: "250px"}} src='https://marketplace.canva.com/EAEeOGhdgP8/2/0/400w/canva-blue-and-black-clean-minimalism-twitch-profile-picture-xC5olvkVy8E.jpg'></img>
        <Text style={{fontSize: "3rem", marginTop: "1rem"}}>My Profile</Text>
    </View>
  );
}

export default Profile
