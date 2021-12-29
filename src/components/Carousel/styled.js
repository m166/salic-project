import styled from 'styled-components'

export const StyledWrapper = styled.div`
  .Banner {
    box-shadow: none;
    background-color: transparent;
    height: 400px;
  }

  .item {
    margin: 0 auto;
    width: 30%;
    height: 350px;
    padding: 20px 30px;
  }

  div[class*="Carousel-fullHeightHoverWrapper"] {
    height: calc(100% - 140px);
  }

  div[class*="Carousel-buttonWrapper"]:hover {
    button {
      filter: none;
      opacity: 1;
      background-color: #fff;
    }
  }

  button[aria-label="Next"], button[aria-label="Previous"] {
    opacity: 1;
    color: #9e9e9e;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }

  div[class*="Carousel-indicators"] {
    button {
      color: transparent;
      border: 1px solid #ccc;
      width: 11px;
      height: 11px;
      margin: 0px 3px;
      font-size: 19px;
    }

    button[class*="Carousel-active"] {
      color: #ccc;
    }
  }

  div[class*="Carousel-prev"] {
    left: -10px;
  }

  div[class*="Carousel-next"] {
    right: -10px;
  }
`

export const StyledBadge = styled.span`
  border-radius: 4px;
  padding: 4px;
  text-transform: uppercase;
  background-color: #FFF2DB;
  color: #CF9D48;
  font-weight: 600;
  font-size: 14px;
`

export const StyledCardTitle = styled.h4`
  font-size: 16px;
  color: #000;
  font-weight: 600;
  margin: 10px 0px 8px;
  white-space: nowrap;
  max-width: 40ch;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: uppercase;
`

export const StyledCardSubTitle = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: 300;
`

export const StyledCardDescribe = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 300;
  text-align: justify;
`

export const StyledBudget = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  position: relative;
  margin-bottom: 12px;

  strong {
    margin-left: 30%;
    position: absolute;
  }
`

export const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .add-button {
    text-transform: uppercase;
    color: #bdbdbd;
    background-color: #FAFBFD;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    width: calc(100% - 72px);
    font-size: 16px;
    font-weight: 400;
    border-radius: 8px;

    &:hover {
      background-color: #eeeeee;
    }
  }

  .favorite-button {
    margin-top: 20px;
    width: 60px;
    margin-left: 12px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`

export const StyledSeeMore = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: gray;
  text-transform: uppercase;
`
