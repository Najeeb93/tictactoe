import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

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

const styles = StyleSheet.create({});