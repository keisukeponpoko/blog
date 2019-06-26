const { createClient } = require('contentful')
require('dotenv').config()

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

client
  .getEntries({
    content_type: 'category'
  })
  .then(entries => {
    console.log(entries)
    return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
  })

console.log('hello')
