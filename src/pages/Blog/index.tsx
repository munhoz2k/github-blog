import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Profile } from '../../components/Profile'

import { BlogPostsContainer, BlogSearchContainer } from './styles'
import { SearchForm } from './components/SearchForm'
import { Post } from './components/Post'

export function Blog() {
  const { issuesList, error, isFetching } = useContext(IssuesContext)

  if (isFetching) {
    return (
      <>
        <Profile />

        <BlogSearchContainer>
          <div>
            <h2>Publicações</h2>
            <span>0 publicações</span>
          </div>

          <SearchForm />
        </BlogSearchContainer>

        <BlogPostsContainer>
          <h1>Carregando...</h1>
        </BlogPostsContainer>
      </>
    )
  } else if (error) {
    return (
      <>
        <Profile />

        <BlogSearchContainer>
          <div>
            <h2>Publicações</h2>
            <span>0 publicações</span>
          </div>

          <SearchForm />
        </BlogSearchContainer>

        <BlogPostsContainer>
          <h1>Não encontramos postagens...</h1>
        </BlogPostsContainer>
      </>
    )
  } else {
    return (
      <>
        <Profile />

        <BlogSearchContainer>
          <div>
            <h2>Publicações</h2>
            <span>{issuesList.length} publicações</span>
          </div>

          <SearchForm />
        </BlogSearchContainer>

        <BlogPostsContainer>
          {issuesList.map((issue) => {
            return <Post key={issue.number} issue={issue} />
          })}
        </BlogPostsContainer>
      </>
    )
  }
}
