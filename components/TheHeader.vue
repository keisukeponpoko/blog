<template>
  <header class="header" :class="page">
    <transition-group name="bg" tag="div" class="bg">
      <div v-if="page == 'index'" :key="page" class="bg_img_index" />
      <div v-else :key="page" class="bg_img_about" />
    </transition-group>

    <div class="nav_wrapper">
      <nav class="nav">
        <ul class="nav_lists">
          <nuxt-link exact to="/">
            <li class="nav_list">Home</li>
          </nuxt-link>
          <nuxt-link to="/about">
            <li class="nav_list">About</li>
          </nuxt-link>
        </ul>

        <div @click="isMenuOpen = !isMenuOpen">
          <img class="menu" src="~/assets/images/headers/menu.png">
        </div>

        <TheMenu :is-open="isMenuOpen" />
      </nav>
    </div>
    <TheUser :page="page" />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import TheMenu from '~/components/headers/TheMenu.vue'
import TheUser from '~/components/headers/TheUser.vue'

export default {
  components: { TheMenu, TheUser },
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    ...mapState(['page'])
  }
}
</script>

<style lang="stylus" scoped>
.header {
  width: 100vw;
  height: 300px;
  position: relative;
}

.bg {
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}

bg_img(bg_url) {
  background-image: url(bg_url);
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}

.bg_img_index {
  bg_img('~assets/images/headers/index_bg.jpg');
}

.bg_img_about {
  bg_img('~assets/images/headers/about_bg.jpg');
}

.nav_wrapper {
  width: 100vw;
  position: relative;
  z-index: $z_index_header;
  background: rgba(0, 0, 0, 0.09);
  padding: 0.8rem 1.6rem;

  +tablet() {
    padding: 0.8rem 3.2rem;
  }
}

.nav {
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  +tablet() {
    justify-content: space-between;
  }
}

.nav_lists {
  display: none;

  +tablet() {
    flex: 1;
    display: block;
  }
}

.nav_list {
  display: inline-block;
  margin-right: 4rem;
  color: white;
  font-size: $font_size_large;
}

.menu {
  width: 2.4rem;
  height: 2.4rem;

  +desktop() {
    transition: $transition;
    cursor: pointer;

    &:hover {
      opacity: $opacity;
    }
  }
}

.nuxt-link-active {
  font-weight: bold;
}

// background transition;
.bg-enter-active, .bg-leave-active {
  transition: all 0.4s ease;
}

.bg-enter, .bg-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}
</style>
