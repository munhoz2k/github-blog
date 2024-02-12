import { ProfileContainer, ProfileInfos, ProfileTitle } from './styles'

import profilePic from '../../assets/test-profile-pic.png'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={profilePic} alt="" />

      <div>
        <ProfileTitle>
          <h1>Lucas Munhoz</h1>
          <a href="">
            GITHUB
            <ArrowSquareOut size={14} weight="bold" />
          </a>
        </ProfileTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas
          quibusdam distinctio et asperiores, perferendis illo obcaecati minima
          dolore eius ex saepe ea non itaque dolor repellat odio, illum magnam.
        </p>
        <ProfileInfos>
          <a href="">
            <GithubLogo size={16} weight="fill" />
            <span>github</span>
          </a>

          <a href="">
            <Buildings size={16} weight="fill" />
            <span>empresa</span>
          </a>

          <a href="">
            <Users size={16} weight="fill" />
            <span>25 seguidores</span>
          </a>
        </ProfileInfos>
      </div>
    </ProfileContainer>
  )
}
