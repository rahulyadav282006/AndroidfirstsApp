import React from 'react'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }
      ]}
    >
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}> Hello Wrold !!
         
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',   // center horizontally
    justifyContent: 'center' // center vertically
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 20
  },
  darkText: {
    color: '#000000',
    fontSize: 20
  }
})

export default App