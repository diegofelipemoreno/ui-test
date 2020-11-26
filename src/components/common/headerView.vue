<template>
  <header class="header">
    <div class="header__wrapper grid">
      <a href="/" class="header__logo js-logo">
        <span>Rule of Thumb</span>
      </a>
      <navigation></navigation>
    </div>
  </header>
</template>

<script>
  import Navigation from './navigation.vue';

  export default {
    name: 'header-view',
    components: {
      'navigation': Navigation
    }
  }
</script>
