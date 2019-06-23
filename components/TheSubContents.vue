<template>
  <div class="TheSubContents">
    <div v-if="relationArticles.length > 0" class="relationArticle">
      <h2>関連記事</h2>aaaaaab
      bbbbbb
    </div>

    <div v-if="categories.length > 0" class="categories">
      あああああ
      いいいい
    </div>
  </div>
</template>

<script>
// contentfulの記事が更新されたら、サークルCIで、contentfulに全ての記事をください！とAPIリクエストを投げる。
// その結果を、ごにょごにょして、良い感じのJSONを作成する。
// それを、指定のディレクトリに保存しておく。
// build時は、それを見てgenerateを進めていく。
// また、実際にページが表示される時も、そのjsonを確認して、ページングなどを行う。
// だが、この良い感じのJSONを作るのが難しそう。
export default {
  props: {
    relationArticles: {
      type: Array,
      required: false,
      default: () => []
    },
    categories: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>


<style lang="stylus" scoped>
.copy {
  text-align: center;
  margin: 0.8rem 0;
}
</style>
