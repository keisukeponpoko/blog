const { createClient } = require('contentful')

export default ({ env }, inject) => {
  const client = createClient({
    space: env.CONTENTFUL_SPACE_ID,
    accessToken: env.CONTENTFUL_ACCESS_TOKEN
  })
  inject('contentful', client)
}
