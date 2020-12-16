<template>
  <section class="hero">
    <div v-if="cardData.cta" class="hero__wrapper grid">
      <div class="hero__card">
        <div class="hero__masthead">
          <h3 class="hero__eyebrow">{{ cardData.eyebrow }}</h3>
          <h4 class="hero__title">{{ cardData.title }}</h4>
          <p class="hero__body">{{ cardData.body }}</p>
          <a class="hero__anchor" v-bind:href="cardData.cta.url">
            {{ cardData.cta.label }}
          </a>
          <span class="hero__note">{{ cardData.note }}</span>
        </div>

        <form class="hero__vote-form">
          <button type="submit" class="hero__vote-button hero__vote-button--up ok-icon">
            <img src="../assets/img/ok-icon.png"/>
          </button>
          <button type="submit" class="hero__vote-button hero__vote-button--down">
            <img src="../assets/img/ok-icon.png"/>
          </button>
        </form>
      </div>

      <div class="hero__closing">
        <span class="hero__closing-label">{{ closingData.label }}</span>
        <span class="hero__closing-deadline">
          {{ closingData.deadline.number }}
          <span>{{ closingData.deadline.format }}</span>
        </span>
      </div>
      <div class="hero__cover-box">
        <img class="hero__cover-img" src="../assets/img/papa.jpg">
      </div>
    </div> 
  </section>
</template>

<script>
  import Card from './card.vue';

  export default {
    name: 'hero',
    computed: {
      cardData() {
  
        return this.$store.getters.heroCardGetter
      },
      closingData() {
        return this.$store.getters.heroClosingGetter
      }
    }
  }
</script>
