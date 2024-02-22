import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_github_token,
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

export const defaultUser = 'munhoz2k'
export const defaultRepo = 'github-blog'

export const issuesApi = '/search/issues/'
export const userApi = `/users/${defaultUser}`
export const repoIssuesApi = `/repos/${defaultUser}/${defaultRepo}/issues/`
