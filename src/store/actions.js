import * as MUTATION from './mutation-types';
import { CONSTANTS } from './constants';

/**
 * Sets the vote up/down content and set isvoted 'true' committing a mutation.
 * @param {!Object} store The APP store object.
 * @param {!Object} voteObject Current vote card data.
 * @private
 */
export const set_vote_action = ({ commit }, voteObject) => {
  voteObject[CONSTANTS.IS_VOTED] = true;
  commit(MUTATION.SET_VOTE, voteObject);
  commit(MUTATION.SET_IS_VOTED, voteObject);
};

/**
 * Actives the vote again  committing a mutation.
 * @param {!Object} store The APP store object.
 * @param {!Object} voteObject Current vote card data.
 * @private
 */
export const active_vote_again = ({ commit }, voteObject) => {
  voteObject[CONSTANTS.IS_VOTED] = false;
  commit(MUTATION.SET_IS_VOTED, voteObject);
};



