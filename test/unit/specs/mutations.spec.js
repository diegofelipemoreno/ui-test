import * as MUTATION from '@/store/mutation-types';
import mutations from '@/store/mutations.js';
import { localStorageService } from '@/services/localStorageService';

const mockId = 'kaney-west';
const mockPayloadDown = {id: mockId, pickedVote: 'down'};
const mockPayloadUp = {id: mockId, pickedVote: 'up'};
const state = {
  votes: {
    title: 'Votes',
    cards: {
      'kaney-west': {
        id: 'kaney-west',
        votes: {
          unit: '%',
          up: 50,
          down: 50
        },
        isvoted: false
      }
    }
  }
}

describe('mutations', () => {
  describe('SET_VOTE', () => {
    it('Set vote type "up" add a plus one on the up value.', () => {
      const mockState = {
        votes: {
          cards: {
            'kaney-west': {
              id: 'kaney-west',
              votes: {
                up: 50,
                down: 50
              }
            }
          }
        }
      }
      const mockVotesCard = mockState.votes.cards[mockId].votes;

      mutations[MUTATION.SET_VOTE](mockState, mockPayloadUp);
      expect(mockVotesCard.up).toEqual(51);
    });

    it('Set vote type "up" remove one on the "down" value.', () => {
      const mockState = {
        votes: {
          cards: {
            'kaney-west': {
              id: 'kaney-west',
              votes: {
                up: 50,
                down: 50
              }
            }
          }
        }
      }
      const mockVotesCard = mockState.votes.cards[mockId].votes;

      mutations[MUTATION.SET_VOTE](mockState, mockPayloadUp);
      expect(mockVotesCard.down).toEqual(49);
    });

    it('Set vote type "down" add a plus one on the down value.', () => {
      const mockState = {
        votes: {
          cards: {
            'kaney-west': {
              id: 'kaney-west',
              votes: {
                up: 50,
                down: 50
              }
            }
          }
        }
      }
      const mockVotesCard = mockState.votes.cards[mockId].votes;

      mutations[MUTATION.SET_VOTE](mockState, mockPayloadDown);
      expect(mockVotesCard.down).toEqual(51);
    });

    it('Set vote type "down" remove one on the "up" value.', () => {
      const mockState = {
        votes: {
          cards: {
            'kaney-west': {
              id: 'kaney-west',
              votes: {
                up: 50,
                down: 50
              }
            }
          }
        }
      }
      const mockVotesCard = mockState.votes.cards[mockId].votes;

      mutations[MUTATION.SET_VOTE](mockState, mockPayloadDown);
      expect(mockVotesCard.up).toEqual(49);
    });

    it('Set the state data on the localStorage service', () => {
      const spy = jest.spyOn(localStorageService, 'setState');
      
      mutations[MUTATION.SET_VOTE](state, mockPayloadUp);
      expect(spy).toHaveBeenCalledWith(state);
    });
  });

  describe('SET_IS_VOTED', () => {

    it('Set "isvoted" card vote property true/false.', () => {
      const mockPayload = {id: mockId, isvoted: true};
      const mockVotesCard = state.votes.cards[mockId];
      
      mutations[MUTATION.SET_IS_VOTED](state, mockPayload);
      expect(mockVotesCard.isvoted).toBe(true);
    });

    it('Set the state data on the localStorage service', () => {
      const spy = jest.spyOn(localStorageService, 'setState');
      
      mutations[MUTATION.SET_VOTE](state, mockPayloadUp);
      expect(spy).toHaveBeenCalledWith(state);
    });
  });
});