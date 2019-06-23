<template>
  <section class="slug">
    <h1 class="slug_title">{{ post.fields.title }}</h1>
    <p class="slug_date">{{ (new Date(post.fields.publishedAt)).toLocaleDateString() }}</p>
  </section>
</template>

<script>
export default {
  asyncData({ app, params }) {
    return app.$contentful
      .getEntries({
        content_type: 'category',
        'fields.slug': params.slug
      })
      .then(entries => {
        return {
          post: entries.items[0]
        }
      })
      .catch(console.error)
  }
}
</script>

<style scoped>
.slug {
  max-width: 800px;
  margin: 0 auto;
}
.slug_title {
  font-size: 2rem;
  font-weight: bolder;
}
.slug_date {
  font-size: 1rem;
  color: rgb(57, 72, 85);
  text-align: right;
}
</style>
