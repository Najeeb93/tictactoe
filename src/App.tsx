import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';


export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>
          Tic Tac Toe
        </Text>
      </View>
    </SafeAreaView>
  )
}