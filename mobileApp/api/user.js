/* global __DEV__ */
import axios from 'axios';

const apiPath = __DEV__ ? 'http://localhost:3000' : '_FILL_IN_PROD_API_PATH';

export const getUser = async userId =>
  axios
    .get(`${apiPath}/users/${userId}`)
    .then(res => ({
      success: true,
      user: res.data,
    }))
    .catch(err => ({
      success: false,
      error: err,
      message: 'Unable to get user info',
    }));
