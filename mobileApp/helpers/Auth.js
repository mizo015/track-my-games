import Expo from 'expo';
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../credentials.json';
import { setItem } from '../storage/localStorage';

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      // store user info locally
      await setItem('accessToken', result.accessToken);
      await setItem('user', result.user);

      return result;
    }
    return {
      cancelled: true,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
};

export const signOut = async () => {
  await setItem('accessToken', null);
  await setItem('user', null);
};
