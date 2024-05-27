import React from 'react'
import style from './PostsLikesSmall.module.scss'

import { postApi } from '../../store/services/postApi'
import { useState } from 'react'


function PostLikesSmall() {


    const {data: post, isLoading, isError, refetch} = postApi.useGetPostQuery('1')
    const [postlikes, setPostLikes] = useState([])


    // const likes = post.likes
    
   
    {post && console.log(post.likes);}
    
    // console.log(postlikes)

    return (
       
        <>
        {post && post.likes.length}
        {post && post.likes.map((el)=>(

<p key={el.id}>{el.user.login}</p>

))} 

        
        
        </>
        
        
        
        
        
        
    
    )
}

export default PostLikesSmall
