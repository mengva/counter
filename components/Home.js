import React from 'react'
import { View, Text, Button } from "react-native";


function Home({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
            <Text style={{fontSize: "3rem", marginBottom: "1rem"}}>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate("Details")}/>
        </View>
    )
}

export default Home
