import * as MUTATION from './mutation-types';
import { CONSTANTS } from './constants';
import { localStorageService } from '../services/localStorageService';

export default {
  /**
   * Sets the up/down vote on the current card on the store state.
   * @param {!Object} stae The store state object.
   * @param {!Object} voteObject Current vote card data.
   * @private
   */
  [MUTATION.SET_VOTE](state, {id, pickedVote}) {
    if (pickedVote === CONSTANTS.UP) {
      state.votes.cards[id].votes.up += 1;
      state.votes.cards[id].votes.down -= 1;
    }
    
    if (pickedVote === CONSTANTS.DOWN) {
      state.votes.cards[id].votes.up -= 1;
      state.votes.cards[id].votes.down += 1;
    }

    localStorageService.setState(state);
  },

  /**
   * Sets isvoted vote true on the current card on the store state.
   * @param {!Object} stae The store state object.
   * @param {!Object} voteObject Current vote card data.
   * @private
   */
  [MUTATION.SET_IS_VOTED](state, {id, isvoted}) {
    state.votes.cards[id].isvoted = isvoted;
    localStorageService.setState(state);
  } 
};