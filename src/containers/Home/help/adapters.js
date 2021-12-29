export const adapterProjectResponse = ({ data }) => (
  {
    count: data.count,
    total: data.total,
    lista: data._embedded.projetos
  }
)

export const adapterProjectRequest = (limit) => ({ limit, format: 'json' })
