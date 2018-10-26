import Expo from 'expo';
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '../credentials.json';
import { setItem } from '../storage/localStorage';
import { createUser } from '../factory/User';
import { addUser, getUserByEmail, getUserById } from '../api/user';

// map returned user object from google api to internal user structure
const googleUserMapper = googleUser => ({
  googleId: googleUser.id,
  email: googleUser.email,
  firstName: googleUser.givenName,
  familyName: googleUser.familyName,
  profilePicUrl: googleUser.photoUrl,
});

// get user doc from db otherwise return user doc skeleton
const getUser = async userInfo => {
  const usersFound = await getUserByEmail(userInfo.email);

  if (!usersFound.success) {
    throw new Error('Failed to look up user record');
  }

  if (usersFound.users.length === 1) {
    const { user } = await getUserById(usersFound.users[0].userId);
    return user;
  }

  if (usersFound.users.length === 0) {
    const user = {
      ...createUser(),
      ...userInfo,
    };
    // create new user doc
    const res = await addUser(user);

    if (res.error) {
      return {
        error: true,
        message: 'error creating user document',
      };
    }

    return user;
  }
  // TODO: Handle scenario where user doc was added twice
  throw new Error(`Multiple user records found for email: ${userInfo.email}`);
};

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      // TODO: Handle failure
      const user = await getUser(googleUserMapper(result.user));

      // store user info locally... for now
      await setItem('accessToken', result.accessToken);
      await setItem('user', user);

      return user;
    }
    return {
      cancelled: true,
    };
  } catch (e) {
    return {
      error: e,
    };
  }
};

export const signOut = async () => {
  await setItem('accessToken', null);
  await setItem('user', null);
};
