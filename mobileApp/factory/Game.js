import { uniqueId } from 'lodash';
import moment from 'moment';

export const createGame = () => ({
  assists: null,
  dateTime: moment.unix().format('x'),
  defendedBalls: null,
  fun: null,
  gameTimeMins: null,
  goalsScored: null,
  id: uniqueId(new Date().getTime()),
  lostBall: null,
  notes: null,
  offTargetShots: null,
  onTargetShots: null,
  snaps: null,
  score: null,
  isWon: false,
  location: null,
  name: null,
});
