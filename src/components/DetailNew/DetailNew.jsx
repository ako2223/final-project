import React from 'react'
import { useParams } from 'react-router'

function DetailNew() {
    const {newsId, title} = useParams();
    return (
     <h1>{newsId}: {title}</h1>   
    )
}

export default DetailNew
