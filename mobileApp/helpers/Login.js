import Expo from 'expo';
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../credentials.json';

const signInWithGoogleAsync = async () => {
    try {
        const result = await Expo.Google.logInAsync({
            androidClientId: GOOGLE_ANDROID_CLIENT_ID,
            iosClientId: GOOGLE_IOS_CLIENT_ID,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
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

export { signInWithGoogleAsync };
