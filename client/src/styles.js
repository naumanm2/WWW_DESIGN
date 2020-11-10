import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    opacity: 1;
    transition: opacity 1s ease-in;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Sans-Serif;
  }
  body {
    overflow-y: ${({ open }) => (open) ? 'hidden' : ''}
  }
  `

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
@media screen and (max-width: 991px) {
  padding-left: 30px;
  padding-right: 30px;
}
`;

export default GlobalStyle
