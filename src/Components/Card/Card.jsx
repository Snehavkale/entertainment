import React from 'react'
import "./card.css"
import { img_300, unavailable } from '../../config/config'
import { Badge } from '@mui/material'

const Card = ({id,title,poster,date,media_type,vote_average,}) => {
  return (
    <>
     <div className='media'>
     <Badge badgeContent={vote_average} color={vote_average > 7 ? "secondary" :"primary"}>
    </Badge>
       <img className='image' src={poster ? `${img_300}/${poster}` : unavailable}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>{media_type ==="movie"? "Movie" : " Tv Series"}
        <span className='subTitle'>{date}</span>
        </span>
     </div>
    </>
  )
}

export default Card
