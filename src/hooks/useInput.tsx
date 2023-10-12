import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import React, {useState} from 'react';

export default function useInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);

  const onChangeText = (text: string) => {
    setValue(text);
  };

  return {
    value,
    onChangeText,
  };
}
