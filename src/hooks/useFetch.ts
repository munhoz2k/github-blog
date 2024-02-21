import { useEffect, useState } from 'react'
import { api } from '../libs/axios'

export function useFetch<T = unknown>(
  url: string,
  isParams: boolean = false,
  query?: string,
  user?: string,
  repo?: string,
) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let queryParam = null

    if (isParams) {
      queryParam = `${query}repo:${user}/${repo}`
    } else {
      queryParam = null
    }

    api
      .get(url, {
        params: {
          q: queryParam,
        },
      })
      .then(({ data }) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false))
  }, [])

  return { data, error, isFetching }
}
