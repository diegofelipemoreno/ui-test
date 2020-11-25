<template>
  <nav class="nav">
		<ul class="nav__menu-container">
			<li class="nav__menu-list">
				<a class="nav__menu-anchor" href="/past-trials">
					<span>Past of trials</span>
				</a>
			</li>
      <li class="nav__menu-list">
			  <a class="nav__menu-anchor" href="/how-it-works">
					<span>How it works</span>
				</a>
      </li>
			<li class="nav__menu-list">
			  <a class="nav__menu-anchor" href="/log-in">
					<span>Log in/ Sign Up</span>
				</a>
      </li>
			<li class="nav__menu-list">
				<button class="nav__search">
  				<svg class="search-icon"><use xlink:href="#ico-search"></use></svg>
				</button>
      </li>
		</ul>
	</nav>
</template>

<script>
  import Vue from 'vue';
  import Navigation from './navigation.vue';

  export default {
    name: 'navigation',
    components: {
      'navigation': Navigation
    }
  }
</script>
