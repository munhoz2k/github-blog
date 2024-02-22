import { useFetch } from '../../hooks/useFetch'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import {
  LoadingScreen,
  ProfileContainer,
  ProfileInfos,
  ProfileMainContent,
  ProfileTitle,
} from './styles'
import { userApi } from '../../libs/axios'

interface UserProps {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

export function Profile() {
  const { data: userData, error, isFetching } = useFetch<UserProps>(userApi)

  if (isFetching) {
    return (
      <ProfileContainer>
        <LoadingScreen>Carregando...</LoadingScreen>
      </ProfileContainer>
    )
  } else if (error) {
    return (
      <ProfileContainer>
        <LoadingScreen>Perfil não encontrado!</LoadingScreen>
      </ProfileContainer>
    )
  } else {
    return (
      <ProfileContainer>
        <img src={userData?.avatar_url} alt="" />

        <ProfileMainContent>
          <ProfileTitle>
            <h1>{userData?.name}</h1>
            <a href={userData?.html_url}>
              GITHUB
              <ArrowSquareOut size={14} weight="bold" />
            </a>
          </ProfileTitle>

          <p>{userData?.bio}</p>

          <ProfileInfos>
            <a href={userData?.html_url}>
              <GithubLogo size={16} weight="fill" />
              <span>{userData?.login}</span>
            </a>

            <a href={userData?.html_url}>
              <Buildings size={16} weight="fill" />
              <span>{userData?.company}</span>
            </a>

            <a href={userData?.html_url}>
              <Users size={16} weight="fill" />
              <span>{userData?.followers} seguidores</span>
            </a>
          </ProfileInfos>
        </ProfileMainContent>
      </ProfileContainer>
    )
  }
}
