<template>
  <section class="card-list">
    <div class="card-list__wrapper grid">
      <h2 class="card-list__title">{{ votesData.title }}</h2>
      <ul class="card-list__container">
        <card    
          v-for="(card, index) in votesCards" :key="index"
          :id="card.id"
          :name="card.name"
          :time="card.time"
          :content="card.content"
          :image="card.image"
          :votes="card.votes"
          :isvoted="card.isvoted">
        </card>
      </ul>
    </div>
  </section>
</template>

<script>
  import Card from './card.vue';

  export default {
    name: 'card-list',
    components: {
      'card': Card
    },
    computed: {
      votesData() {
        return this.$store.getters.votesDataGetter
      },
      votesCards() {
        return this.$store.getters.votesCardsGetter
      }
    }
  }
</script>+