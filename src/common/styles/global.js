import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900&display=swap');

  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    margin: 0;
  }
`

export default globalStyle
