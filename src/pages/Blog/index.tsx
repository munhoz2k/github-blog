import { Profile } from '../../components/Profile'
import {
  BlogPostsContainer,
  BlogSearchContainer,
  PostContainer,
} from './styles'

export function Blog() {
  const maxTextOnIssue = 158

  const message1 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
  eligendi molestiae porro sapiente quod error sequi itaque in
  exercitationem sit`

  const message2 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
  eligendi molestiae porro sapiente quod error sequi itaque in
  exercitationem sit fugiat suscipit a cumque, beatae molestias amet
  culpa accusamus rerum.`

  const message3 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
  eligendi molestiae porro sapiente quod error sequi itaque in
  exercitationem sit fugiat suscipit a cumque, beatae molestias amet
  culpa accusamus rerum.`

  const message4 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
  eligendi molestiae porro sapiente quod error sequi itaque in
  exercitationem sit fugiat suscipit`

  return (
    <>
      <Profile />

      <BlogSearchContainer>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </BlogSearchContainer>

      <BlogPostsContainer>
        <PostContainer href="">
          <div>
            <h2>Testing</h2>
            <span>Há 1 dia</span>
          </div>
          <p className={message1.length > maxTextOnIssue ? 'overflow' : ''}>
            {message1}
          </p>
        </PostContainer>
        <PostContainer href="">
          <div>
            <h2>Testing and Testing More of the Application</h2>
            <span>Há 1 dia</span>
          </div>
          <p className={message2.length > maxTextOnIssue ? 'overflow' : ''}>
            {message2}
          </p>
        </PostContainer>
        <PostContainer href="">
          <div>
            <h2>Testing and Testing More of the Application</h2>
            <span>Há 1 dia</span>
          </div>
          <p className={message3.length > maxTextOnIssue ? 'overflow' : ''}>
            {message3}
          </p>
        </PostContainer>
        <PostContainer href="">
          <div>
            <h2>Testing</h2>
            <span>Há 1 dia</span>
          </div>
          <p className={message4.length > maxTextOnIssue ? 'overflow' : ''}>
            {message4}
          </p>
        </PostContainer>
      </BlogPostsContainer>
    </>
  )
}
