/* global __DEV__ */
import axios from 'axios';

const apiPath = __DEV__ ? 'http://localhost:3000' : '_FILL_IN_PROD_API_PATH';

export const getUserById = async userId =>
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

export const getUserByEmail = async email =>
  axios
    .get(`${apiPath}/usersByEmail/${email}`)
    .then(res => ({
      success: true,
      users: res.data,
    }))
    .catch(err => ({
      success: false,
      error: err,
      message: 'Unable to get user by email info',
    }));

export const addUser = async user =>
  axios
    .post(`${apiPath}/users`, user)
    .then(res => ({
      success: true,
      user: res.data,
    }))
    .catch(err => ({
      success: false,
      error: err,
      message: 'Unable to add user',
    }));

export const addGames = async (userId, games) =>
  axios
    .post(`${apiPath}/addGames/`, {
      userId,
      games,
    })
    .then(res => ({
      success: true,
      user: res.data,
    }))
    .catch(err => ({
      success: false,
      error: err,
      message: 'Unable to add games',
    }));
