import { AsyncStorage } from 'react-native';

export const getItem = async key => AsyncStorage.getItem(key);

export const setItem = async (key, value) => AsyncStorage.setItem(key, value);

export const clear = async callback => AsyncStorage.clear(callback);

export const removeItem = async key => AsyncStorage.removeItem(key);
