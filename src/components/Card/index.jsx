import React from "react"
// import cardStyles from "./card.module.scss"
// import { Dropdown } from "react-bootstrap"
import * as Styled from "./styled"
import Images from "../Images"

const Card = props => {
  const { titleCard, textCard, colorButton } = props

  return (
    <Styled.CardWrapper
      className="card"
      color={props.textColor}
      primary={props.styleDefault}
    >
      <Images srcImage={props.srcImage}></Images>
      <div className="card-body">        
        <h5 className="card-title">{titleCard}</h5>
        <p className="card-text">{textCard}</p>
        <a href="/" className={`btn btn-${colorButton}`}>
          Visitar
        </a>
      </div>
    </Styled.CardWrapper>
  )
}

export default Card
