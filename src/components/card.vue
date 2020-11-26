<template>
  <li class="card"> 
    <div class="card__container grid">
      <div 
        :class="'js-card-flag card__flag ' + [isUpVoteWinner ? '' : 'card__flag--down']">
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
            :disabled="!pickedVote"
            type="submit" 
            class="js-vote-now-cta card__vote-now cta-1">
              Vote now
          </button>
      </form>

      <ul class="card__vote-info">
        <li class="js-up-bar">
          <img src="../assets/img/ok-icon.png"/>
          <span class="card__percent">{{votes.up}}{{votes.unit}}</span>
        </li>
        <li class="js-down-bar">
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
  import {CONSTANTS} from '../store/constants';

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
        upBar: null,
        downBar: null
      }
    },
    mounted() {
      this.upBar = this.$el.querySelector('.js-up-bar'); 
      this.downBar = this.$el.querySelector('.js-down-bar'); 
      this.cardFlag = this.$el.querySelector('.js-card-flag'); 
      this.setVotesBars_();
    },
    computed: {
      isUpVoteWinner(votes) {
        return this.$store.getters.isUpVoteWinnerGetter(votes);
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

        this.$store.dispatch('set_vote_action', 
          { id: this.id,
            pickedVote: this.pickedVote
          }
        );
      },

      /**
       * Sets the up/down bars width accoriding the votes up/down data.
       * @private
       */
      setVotesBars_() {
        this.upBar.style.setProperty('--up',`${this.votes.up}%`);
        this.downBar.style.setProperty('--down', `${this.votes.down}%`);
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