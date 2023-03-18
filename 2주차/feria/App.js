import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>

      </View>
      <View style={styles.containerTwo}>
        <View style={styles.innerOne}>

        </View>
        <View style={styles.innerTwo}>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  containerOne: {
    flex: 2,
    backgroundColor: "red"
  },
  containerTwo: {
    flex: 4,
    // flexDirection: "row",
    flexDirection: "column",
    backgroundColor: "yellow"
  },

  innerOne: {
    flex: 2,
    backgroundColor: "blue"
  },
  innerTwo: {
    flex: 4,
    backgroundColor: "yellow"
  }
});