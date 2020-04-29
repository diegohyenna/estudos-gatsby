import styled, { css } from "styled-components"

export const CardWrapper = styled.div`
  background-color: #e3a617;
  color: ${props => (props.color ? props.color : "#dc3545")};

  ${props =>
    props.primary &&
    css`
      background-color: #8a4baf;

      h5 {
        color: #f1defa;
      }

      p {
        color: #f1defa;
      }
    `}
`
