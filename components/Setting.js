import React from 'react'
import {View, Text} from "react-native"

function Setting() {
  return (
    <View style={{
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "Yellow"
    }}>
      <img style={{borderRadius: "100%", width: "250px", padding: "2rem"}} src='https://img.freepik.com/premium-vector/profile-completeness-ui-element-template_106317-35744.jpg'></img>
        <Text style={{fontSize: "3rem", marginTop: "1rem"}}>Setting</Text>
    </View>
  )
}

export default Setting
