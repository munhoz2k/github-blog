/* eslint-disable react/no-children-prop */
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { formatDistanceToNow } from 'date-fns'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReactMarkdown from 'react-markdown'

import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  LoadingScreen,
  PostContainer,
  PostProfileContainer,
  PostProfileInfos,
  PostProfileTop,
} from './styles'
import { ptBR } from 'date-fns/locale/pt-BR'
import { repoIssuesApi } from '../../libs/axios'

interface PostProps {
  html_url: string
  title: string
  user: {
    login: string
    html_url: string
  }
  comments: number
  created_at: string
  body: string
}

export function Post() {
  const { postId } = useParams()
  const {
    data: postData,
    error,
    isFetching,
  } = useFetch<PostProps>(`${repoIssuesApi}${postId}`)

  if (isFetching) {
    return (
      <PostContainer>
        <LoadingScreen>Carregando...</LoadingScreen>
      </PostContainer>
    )
  } else if (error) {
    return (
      <PostContainer>
        <LoadingScreen>Post não encontrado!</LoadingScreen>
      </PostContainer>
    )
  } else {
    return (
      <PostContainer>
        <PostProfileContainer>
          <PostProfileTop>
            <a href="/">
              <CaretLeft size={14} weight="bold" />
              voltar
            </a>
            <a href={postData?.html_url}>
              ver no github
              <ArrowSquareOut size={14} weight="bold" />
            </a>
          </PostProfileTop>

          <h2>{postData?.title}</h2>

          <PostProfileInfos>
            <a href={postData?.user.html_url}>
              <GithubLogo size={16} weight="duotone" />
              <span>{postData?.user?.login}</span>
            </a>

            <a href={postData?.html_url}>
              <CalendarBlank size={16} weight="duotone" />
              <span>
                {formatDistanceToNow(new Date(postData!.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </a>

            <a href={postData?.html_url}>
              <ChatsCircle size={16} weight="duotone" />
              <span>{postData?.comments} comentários</span>
            </a>
          </PostProfileInfos>
        </PostProfileContainer>

        <ReactMarkdown
          className="markdown"
          children={postData!.body}
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')

              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={oneDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostContainer>
    )
  }
}
