import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  PostContainer,
  PostContent,
  PostProfileContainer,
  PostProfileInfos,
  PostProfileTop,
} from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostProfileContainer>
        <PostProfileTop>
          <a href="/">
            <CaretLeft size={14} weight="bold" />
            voltar
          </a>
          <a href="">
            ver no github
            <ArrowSquareOut size={14} weight="bold" />
          </a>
        </PostProfileTop>

        <h2>Testing the title</h2>

        <PostProfileInfos>
          <a href="">
            <GithubLogo size={16} weight="duotone" />
            <span>github</span>
          </a>

          <a href="">
            <CalendarBlank size={16} weight="duotone" />
            <span>Há 1 dia</span>
          </a>

          <a href="">
            <ChatsCircle size={16} weight="duotone" />
            <span>5 comentários</span>
          </a>
        </PostProfileInfos>
      </PostProfileContainer>

      <PostContent>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          incidunt quisquam doloremque similique exercitationem modi earum,
          aliquid, consequatur voluptatum dolor laudantium asperiores
          consequuntur, quasi reprehenderit. Nihil velit debitis eum natus!
        </p>
      </PostContent>
    </PostContainer>
  )
}
