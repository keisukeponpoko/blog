<template>
  <div class="TheUser" :class="page">
    <div class="photo">
      <img class="image" src="~/assets/images/headers/icon.jpg">
    </div>

    <h1 class="name">Okadak Blog</h1>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.TheUser {
  max-width: 100rem;
  width: 100%;
  margin: 1.6rem auto;
  position: relative;
  margin-top: 10rem;
  padding: 0 1.6rem;

  +tablet() {
    padding: 0 3.2rem;
  }
}

.photo {
  transition: 0.4s all ease-out;

  .image {
    transition: 0.4s all ease-out;
    width: 18rem;
    height: 18rem;
    border-radius: 0.4rem;
  }
}

.name {
  transition: 0.4s all ease-out;
  color: $text_color;
  font-weight: bold;
  font-size: 3.6rem;

  +tablet() {
    font-size: 4.8rem;
    padding: 0 3.2rem;
  }
}

// animations
.index {
  margin-top: 12rem;

  .photo {
    .image {
      width: 12rem;
      height: 12rem;
    }
  }

  .name {
    transform: translate3d(13rem, -3.4rem, 0) scale(1);
    font-size: 2.4rem;
    width: 16.5rem;
    color: white;
  }
}
</style>
