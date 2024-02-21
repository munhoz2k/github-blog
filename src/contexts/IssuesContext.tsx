/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface IssuesContextProviderProps {
  children: ReactNode
}

export interface IssuesProps {
  number: number
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issuesList: IssuesProps[]
  error: Error | null
  isFetching: boolean
  fetchIssues: (query?: string, user?: string, repo?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issuesList, setIssuesList] = useState<IssuesProps[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  async function fetchIssues(
    query: string = '',
    user: string = 'munhoz2k',
    repo: string = 'github-blog',
  ) {
    setIsFetching(true)
    setError(null)

    const { data } = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${user}/${repo}`,
      },
    })

    if (data.total_count < 1) {
      setError(Error('No items found'))
    } else {
      setIssuesList(data.items)
    }

    setIsFetching(false)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider
      value={{ issuesList, error, isFetching, fetchIssues }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
