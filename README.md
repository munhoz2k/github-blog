<h1>GitHub Blog</h1>
<p>
 <a href="#about">About</a> • 
 <a href="#objective">Objective</a> •
 <a href="#how-to-install">How to install</a> • 
 <a href="#technologies">Technologies</a> • 
</p>

![giphy](https://github.com/munhoz2k/github-blog/assets/71861475/13c47d2c-c118-4c12-922c-03d82447cbb6)
 
# About
This is a modern and simple page to keep an eye on your issues in your repositories.
The design was made by Rocketseat Designers team and passed on to the students to develop the application.
<br/>
<br/>
# Objective
This project is a Rocketseat's challenge to the students where they have to develop the app by themselves.
Github Blog wont go into production, the purpose of the application is just to practice
<br/>
<br/>
# How to install
  
### `Installing packages:`
- First, clone the repository to your machine
- After cloning the repository, open the terminal inside the cloned repository directory and type:
```
  npm install
```  
- Or
```
  yarn install
```  
  
### `Optional:`
- The app uses the GitHub's api, by default the api has a maximum of 10 request per minute which is very low.
- You can change that number to 30 just by adding a `.env` file with your GitHub Personal Access Token.
- The name of the variable must be `VITE_github_token`
- Here is the example:
```env
  VITE_github_token="your_personal_token"
```
- GitHub Blog is set by default to search for issues from this repository in my profile
- You can change this by modifying `./src/libs/axios.ts` file and putting your nickname and repository in the variables:
```ts
  import axios from 'axios'
  
  export const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
      Authorization: 'Bearer ' + import.meta.env.VITE_github_token,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  
  export const defaultUser = 'your nickname' <----------here
  export const defaultRepo = 'repository'    <----------here
  
  export const issuesApi = '/search/issues/'
  export const userApi = `/users/${defaultUser}`
  export const repoIssuesApi = `/repos/${defaultUser}/${defaultRepo}/issues/`
``` 
  
### `Run the app:`
- Now you gotta just run it...
```
  npm run dev
```
- Or
```
  yarn dev
```

# Technologies
- [@react](https://github.com/facebook/react)
- [@styled-components](https://github.com/styled-components/styled-components)
- [@typescript](https://github.com/microsoft/TypeScript)
- [@nodejs](https://github.com/nodejs/node)
- [@vitejs](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@eslint](https://github.com/eslint/eslint)
