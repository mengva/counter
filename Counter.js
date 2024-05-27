import React, { ___, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

  const onHandler = () => {
    return setCounter(counter + 1);
  }

  return (
    <View>
        <Text>
            <button style={styles.button} type="button" onClick={onHandler}>
                Counter { counter}
            </button>
        </Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: "800",
  },

  button: {
    marginTop: 40,
    backgroundColor: "teal",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",

  },
  
  buttonText: {
    color: "white",
    fontSize: 28,
  },
});


// https://github.com/mengva/counter and count