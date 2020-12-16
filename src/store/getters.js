/**
 * Gets the APP state content.
 * @param {!Object} state The state object from the store.
 * @return {!Object}
 */
export const stateGetter = (state) => {
  return state;
};

/**
 * Gets the hero closing content from the APP state.
 * @param {!Object} state The state object from the store.
 * @return {!Object}
 */
export const heroClosingGetter = (state) => {
  return state.hero.closing;
};

/**
 * Gets the hero card content from the APP state.
 * @param {!Object} state The state object from the store.
 * @return {!Object}
 */
export const heroCardGetter = (state) => {
  if (state.hero) {
    return state.hero.card;
  }

  return {};
};

/**
 * Gets the votes content from the APP state.
 * @param {!Object} state The state object from the store.
 * @return {!Object}
 */
export const votesDataGetter = (state) => {
  return state.votes;
};

/**
 * Gets the votes cards list from the APP state.
 * @param {!Object} state The state object from the store.
 * @return {!Array}
 */
export const votesCardsGetter = (state) => {
  if (state.votes) {
    return Object.values(state.votes.cards);
  }

  return {};
};

/**
 * Gets the winner votes.
 * @param {!Object} state The state object from the store.
 * @return {boolean}
 */
export const isUpVoteWinnerGetter = (state) => ({votes}) => {
  let isUpWinner = false;

  if (votes.up >= votes.down) {
    isUpWinner = true;
  }

  return isUpWinner;
};

/**
 * Gets the if the card is voted.
 * @param {!Object} state The state object from the store.
 * @return {boolean}
 */
export const isCardVotedGetter = (state) => ({isvoted}) => {
  return isvoted;
};
