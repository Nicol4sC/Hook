import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TextInput, Modal } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    if (name.length === 30) {
      alert("você atingiu 30 caracteres");
    }
  }, [name]);

  changeTxt = (nameInput) => {
    setName(`Seja bem vindo, ${nameInput}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        style={{
          width: 300,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
        }}
        onChangeText={changeTxt}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
