import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

export default function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

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