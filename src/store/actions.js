import * as MUTATION from './mutation-types';
import { CONSTANTS } from '../utils/constants';

/**
 * Sets the vote up content.
 * @param {!Object} store The APP store object.
 * @param {!Object} voteObject Current vote card data.
 * @private
 */
export const set_up_vote_action = ({ commit }, voteObject) => {
  voteObject[CONSTANTS.IS_VOTED] = true;
  commit(MUTATION.SET_UP_VOTE, voteObject);
  commit(MUTATION.SET_IS_VOTED, voteObject);
};

/**
 * Sets the vote down content.
 * @param {!Object} store The APP store object.
 * @param {!Object} voteObject Current vote card data.
 * @private
 */
export const set_down_vote_action = ({ commit }, voteObject) => {
  voteObject[CONSTANTS.IS_VOTED] = true;
  commit(MUTATION.SET_DOWN_VOTE, voteObject);
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


/**
 * Commits the save state on localstorage mutation.
 * @param {!Object} store The APP store object.
 * @param {string} key The key where the data is going to be save on the LS.
 * @private
 */
export const save_state_on_localstorage_action = ({ commit }, key) => {
  commit(MUTATION.SAVE_STATE_ON_LOCALSTORAGE, key);
};
