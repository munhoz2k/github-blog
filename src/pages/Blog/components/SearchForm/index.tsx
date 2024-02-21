import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { FormContainer } from './styles'
import { useContext } from 'react'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const searchFormInput = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormInput>

export function SearchForm() {
  const { fetchIssues, isFetching } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormInput),
  })

  async function handleSearchSubmit(data: SearchFormInput) {
    await fetchIssues(data.query)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchSubmit)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />

      <button type="submit" disabled={isFetching}>
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </FormContainer>
  )
}
