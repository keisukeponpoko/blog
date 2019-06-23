<template>
  <section class="container">
    <!-- メインコンテンツ -->
    <TheSubContents />
  </section>
</template>

<script>
import TheSubContents from '~/components/TheSubContents.vue'

export default {
  components: { TheSubContents },
  asyncData({ app, store }) {
    store.commit('page', 'index')
  }
}
</script>
