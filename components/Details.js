import React from 'react'
import { View, Text, Button } from "react-native";

function Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent:"center", backgroundColor: "blue" }}>
        <Text>Details Screen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()}/>
   </View>
  )
}

export default Details
