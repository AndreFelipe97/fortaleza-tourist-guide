import * as prismic from '@prismicio/client'

export const repositoryName = 'fortaleza-tourist-guide-2'

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})