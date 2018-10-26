import { uniqueId } from 'lodash';
import moment from 'moment';

export const createUser = () => ({
  age: null,
  createdAt: moment().unix(),
  email: null,
  firstName: null,
  games: [],
  language: null,
  lastLoggedIn: null,
  LastName: null,
  modifiedAt: moment().unix(),
  profilePicUrl: null,
  userId: uniqueId(new Date().getTime()),
});
