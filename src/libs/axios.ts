import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: 'Bearer ' + import.meta.env.VITE_github_token,
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

// 'https://api.github.com/search/issues'
// `https://api.github.com/users/${username}`
// `https://api.github.com/repos/munhoz2k/github-blog/issues/${number}`
