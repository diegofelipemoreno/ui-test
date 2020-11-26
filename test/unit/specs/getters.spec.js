import * as getters from '@/store/getters';

const state = {
  hero: {
    card: {},
    closing: {}
  },
  votes: {
    title: 'Votes',
    cards: {
      'kaney-west': {
        id: 'kaney-west',
        name: 'Kanye West',
        time: '1 month ago in entertainment',
        content: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: 'west.jpg',
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

describe("State getter", () => {
  it("returns an object", () => {
    const mockGetter = getters.stateGetter(state);

    expect(typeof mockGetter).toBe('object');
  });
});

describe("HeroClosing Getter", () => {
  it("returns an object", () => {
    const mockGetter = getters.heroClosingGetter(state);

    expect(typeof mockGetter).toBe('object');
  });
});

describe("HeroCard Getter", () => {
  it("returns an object", () => {
    const mockGetter = getters.heroCardGetter(state);

    expect(typeof mockGetter).toBe('object');
  });
});

describe("VotesData Getter", () => {
  it("returns an object", () => {
    const mockGetter = getters.votesDataGetter(state);

    expect(typeof mockGetter).toBe('object');
  });
});

describe("votesCards Getter", () => {
  it("returns an array", () => {
    const mockGetter = getters.votesCardsGetter(state);

    expect(Array.isArray(mockGetter)).toBe(true);
  });
});