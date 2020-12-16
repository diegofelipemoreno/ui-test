import * as MUTATION from './mutation-types';

import { localStorageCardVotes } from './store';

export default {
  /**
   * Sets the up vote on the current card on the store state.
   * @param {!Object} stae The store state object.
   * @param {!Object} voteObject Current vote card data.
   * @private
   */
  [MUTATION.SET_UP_VOTE](state, {id}) {
    state.votes.cards[id].votes.down -= 1;
    state.votes.cards[id].votes.up += 1;
  },

  /**
   * Sets the down vote on the current card on the store state.
   * @param {!Object} stae The store state object.
   * @param {!Object} voteObject Current vote card data.
   * @private
   */
  [MUTATION.SET_DOWN_VOTE](state, {id}) {
    state.votes.cards[id].votes.up -= 1;
    state.votes.cards[id].votes.down += 1;
  },

  /**
   * Sets isvoted vote true on the current card on the store state.
   * @param {!Object} stae The store state object.
   * @param {!Object} voteObject Current vote card data.
   * @private
   */
  [MUTATION.SET_IS_VOTED](state, {id, isvoted}) {
    state.votes.cards[id].isvoted = isvoted;
  },

  /**
   * Saves state on localstorage.
   * @param {!Object} state The store state object.
   * @param {string} key The key where the data is going to be save on the LS.
   * @private
   */
  [MUTATION.SAVE_STATE_ON_LOCALSTORAGE](state, key) {
    localStorageCardVotes.setState(state, key);
  }
};