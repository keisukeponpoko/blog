<template>
  <transition>
    <div v-if="isOpen" class="TheMenu">
      <nuxt-link class="link" exact to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/about">About</nuxt-link>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.TheMenu {
  background: white;
  position: absolute;
  right: 0;
  top: 3.2rem;
  border-radius: 0.4rem;
  z-index: $z_index_dropdown;
  width: 14rem;
}

.link {
  display: block;
  padding: 1.6rem 0.8rem;
  text-align: center;
  border-bottom: 0.1rem solid $border_color;
  font-weight: bold;

  &:last-of-type {
    border: none;
  }
}

.v-enter-active, .v-leave-active {
  transition: $transition;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
