import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

export default function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);

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