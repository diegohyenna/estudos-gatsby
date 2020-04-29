import styled, { css } from "styled-components"
import Icons from "../../components/Icons"

export const EmailWrapper = styled(Icons.Email)`
  color: ${props => (props.color ? props.color : "red")};
  width: ${props => (props.width ? props.width : "100px")};

  ${props =>
    props.warning &&
    css`
      color: orange;
    `}
`

export const PhoneWrapper = styled(Icons.Phone)`
  ${props =>
    props.warning &&
    css`
      color: orange;
      width: 35px;
    `}
`
