import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Card, Grid, Button, IconButton } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {
  StyledWrapper,
  StyledBadge,
  StyledCardTitle,
  StyledCardSubTitle,
  StyledCardDescribe,
  StyledBudget,
  StyledActionsWrapper,
  StyledSeeMore
} from './styled'
import PropTypes from 'prop-types'
import Loading from 'components/Loading'
import { formatCurrency } from 'common/utils/formatCurrency'

const Item = ({ item }) => (
  <Paper className="item">
      <StyledBadge>{item.area}</StyledBadge>
      <StyledCardTitle>{item.nome}</StyledCardTitle>
      <StyledCardSubTitle>{`${item.municipio} • ${item.UF}`}</StyledCardSubTitle>
      <StyledCardDescribe>{item.resumo.length > 120 ? item.resumo.substring(1, 120) + `...` : item.resumo}</StyledCardDescribe>
      <StyledBudget>Aprovado <strong>{formatCurrency(item.valor_aprovado)}</strong></StyledBudget>
      <StyledBudget>Captado <strong>{formatCurrency(item.valor_captado)}</strong></StyledBudget>
      <StyledActionsWrapper>
        <Button className="add-button" type="button">Adicionar</Button>
        <IconButton className="favorite-button">
          <FavoriteBorderIcon />
        </IconButton>
      </StyledActionsWrapper>
  </Paper>
)


const CarouselMultipleItems = ({ data }) => {
  const items = [];
  const { lista } = data

  if (data && lista && lista.length) {
    const sliderItems = lista.length > 3 ? 3 : lista.length;
  
    for (let i = 0; i < lista.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        items.push(
          <Card raised className="Banner" key={i.toString()}>
            <Grid container spacing={0} className="BannerGrid">
              {lista.slice(i, i + sliderItems).map((da, index) => {
                return <Item key={index.toString()} item={da} />
              })}
              <StyledSeeMore>{`+ Ver Todos`}</StyledSeeMore>
            </Grid>
          </Card>
        );
      }
    }
  }


  return data && lista && lista.length ? (
    <StyledWrapper>
      <Carousel animation="slide" autoPlay={false} cycleNavigation timeout={300}>
          {items}
      </Carousel>
    </StyledWrapper>
  ) : <Loading />
}

CarouselMultipleItems.propTypes = {
  data: PropTypes.object
}

CarouselMultipleItems.defaultProps = {
  data: null
}

export default CarouselMultipleItems