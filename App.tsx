/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {
  onOrientationChange,
  startOrientationTracking,
} from 'react-native-orientation-turbo';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currOrientaion, setCurrOrientaion] = useState('');
  useEffect(() => {
    console.log(currOrientaion);

    startOrientationTracking();

    const subscribe = onOrientationChange(({ orientation }) => {
      setCurrOrientaion(orientation);
    });

    return () => {
      subscribe.remove();
    };
  }, [currOrientaion]);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Text>Textinput</Text>
      <TextInput style={{ width: 100, height: 20,backgroundColor:'white',color:'black' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',alignItems:'center', backgroundColor:'green'
  },
});

export default App;
