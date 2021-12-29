import React, { memo, useEffect, useState } from 'react'
import { StyledHomeWrapper, StyledTitle } from './styled'
import CarouselMultipleItems from 'components/Carousel'
import { getProjects } from './help/requests'
import { adapterProjectResponse, adapterProjectRequest } from './help/adapters'

const initialProjectData = {
  count: 0,
  total: 0,
  lista: []
}

const limitDefault = 100

const Home = () => {
  const [projectData, setProjectData] = useState(initialProjectData)

  useEffect(() => {
    getProjects(adapterProjectRequest(limitDefault))
      .then((res) => {
        setProjectData(adapterProjectResponse(res))
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <StyledHomeWrapper>
      <StyledTitle> Ver outros Projetos do Proponente </StyledTitle>
      <CarouselMultipleItems data={projectData} />
    </StyledHomeWrapper>
  )
}

export default memo(Home)
