/* eslint-disable react/no-children-prop */
import { IssuesProps } from '../../../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { PostContainer, PostTitle } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostProps {
  issue: IssuesProps
}

export function Post({ issue }: PostProps) {
  const maxBodyCharacters = 158

  function limitText(text: string) {
    if (text === null) {
      return null
    } else if (text.length > maxBodyCharacters) {
      const limitedText = text.substring(0, maxBodyCharacters) + ' ...'
      return limitedText
    } else {
      return text
    }
  }

  return (
    <PostContainer href={`/post/${issue.number}`} key={issue.number}>
      <PostTitle>
        <h2>{issue.title}</h2>
        <span>
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </PostTitle>

      <ReactMarkdown children={limitText(issue.body)} className="markdown" />
    </PostContainer>
  )
}
