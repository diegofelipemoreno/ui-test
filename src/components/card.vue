<template>
  <li class="card"> 
    <div class="card__container grid">
      <div 
        :class="setTypeVoteCssClassname">
          <img src="../assets/img/ok-icon.png"/>
      </div>
      <div class="card__masthead">
        <h4 class="card__title">{{name}}</h4>
        <p class="card__time">{{time}}</p>
        <div class="card__body">
          <p v-if="!isvoted">{{content}}</p>
          <p v-if="isvoted">Thank you for your voting!</p>
        </div>
      </div>
      <button 
        v-if="isvoted" 
        @click="activeVoteAgain_"
        class="card__vote-again cta-1">
          Vote again
      </button>    
      <form 
        v-if="!isvoted"
        v-on:submit.prevent="setVote_"
        class="card__vote-form">
          <div class="card__vote-box card__vote-box--up">
            <input 
              :id="'up-' + id"
              v-model="pickedVote"
              class="card__vote-input" 
              type="radio"
              name="vote"
              :value="up"
              >
            <img src="../assets/img/ok-icon.png"/>
            <label class="sr-only" :for="'up-' + id">up</label>
          </div>
          <div class="card__vote-box card__vote-box--down">
            <input 
              :id="'down-' + id"
              v-model="pickedVote"
              class="card__vote-input"
              name="vote" 
              :value="down"
              type="radio"
              >
            <img src="../assets/img/ok-icon.png"/>
            <label class="sr-only" :for="'down-' + id">Down</label>
          </div>
          <button 
            type="submit" 
            class="js-vote-now-cta card__vote-now cta-1">
              Vote now
          </button>
      </form>

      <ul class="card__vote-info">
        <li :style="`--up:${votes.up}%`">
          <img src="../assets/img/ok-icon.png"/>
          <span class="card__percent">{{votes.up}}{{votes.unit}}</span>
        </li>
        <li :style="`--down:${votes.down}%`">
          <span class="card__percent">{{votes.down}}{{votes.unit}}</span>
          <img src="../assets/img/ok-icon.png"/>
        </li>
      </ul>
    </div>
    <div class="card__cover-box">
      <img class="card__cover-img" :src="'../assets/img/' + image">
    </div>
  </li>
</template>

<script>
  import {CONSTANTS} from '../utils/constants';

  export default {
    name: 'card',
    props: {
      id: String,
      name: String,
      time: String,
      content: String,
      image: String,
      votes: Object,
      isvoted: Boolean
    },
    data() {
      return {
        pickedVote: '',
        up: CONSTANTS.UP,
        down: CONSTANTS.DOWN,
      }
    },
    computed: {
      setTypeVoteCssClassname() {
        return `js-card-flag card__flag ${this.isUpVoteWinner ? '' : 'card__flag--down'}`;
      },
      isUpVoteWinner(votes) {
        return this.$store.getters.isUpVoteWinnerGetter(votes);
      },
      isCardVoted(votes) {
        return this.$store.getters.isCardVotedGetter(votes);
      }
    },
    watch: {
      isCardVoted(newValue, oldValue) {
        this.$store.dispatch(
          'save_state_on_localstorage_action', CONSTANTS.MODEL_KEY);
      }
    },
    methods: {
      /**
       * Sets the vote up/down content dispatching an action.
       * @param {!Event} event The submit event object.
       * @private
       */
      setVote_(event) {
        event.preventDefault();
 
        if (this.pickedVote === CONSTANTS.DOWN) {
          this.$store.dispatch('set_down_vote_action', { id: this.id });
        }

        if (this.pickedVote === CONSTANTS.UP) {
          this.$store.dispatch('set_up_vote_action', { id: this.id });
        }
      },
      /**
       * Actives the vote again dispatching an action.
       * @param {!Event} event The submit event object.
       * @private
       */
      activeVoteAgain_(event) {
        this.$store.dispatch('active_vote_again', {id: this.id});
      }
    }
  }
</script>