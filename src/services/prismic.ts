import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'fortaleza-tourist-guide-2'

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
})