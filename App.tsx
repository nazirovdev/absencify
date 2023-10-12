/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useInput from './src/hooks/useInput';
import {useAuthStudentViewModel} from './src/viewModel/student/AuthStudentViewModel';

function App(): JSX.Element {
  const username = useInput('');
  const password = useInput('');

  const {authLoginRequest} = useAuthStudentViewModel();

  const onLoginHandle = () => {
    authLoginRequest({
      username: username.value,
      password: password.value,
      onError(status, message) {
        if (status) {
          Alert.alert('Pesan', JSON.stringify(message));
        } else {
          Alert.alert('Pesan', JSON.stringify('Anda berhasil Login'));
        }
      },
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={username.value}
          onChangeText={username.onChangeText}
        />
        <View style={{marginVertical: 5}} />
        <TextInput
          style={styles.textInput}
          value={password.value}
          onChangeText={password.onChangeText}
        />
        <View style={{marginVertical: 5}} />
        <Pressable style={styles.button} onPress={onLoginHandle}>
          <Text style={styles.textButton}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;
