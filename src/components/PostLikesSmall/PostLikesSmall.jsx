import React from 'react'
import style from './PostsLikesSmall.module.scss'

import { postApi } from '../../store/services/postApi'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderradius: 25,
  };


function PostLikesSmall({id}) {


    const {data: post, isLoading, isError, refetch} = postApi.useGetPostQuery(id)
    const [postlikes, setPostLikes] = useState([])

    const [open, setOpen] = useState(false);
    const handleOpen = () => {post.likes.length && setOpen(true)};
    const handleClose = () => setOpen(false);


    // const likes = post.likes
    
   
    {post && console.log(post.likes);}
    
    // console.log(postlikes)

    return (
       
        <>

        
        <span className={style.all} onClick={handleOpen}>{post && post.likes.length} liked</span>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Кому понравился пост:
          </Typography>
          
          {post && post.likes.map((el)=>(

<Typography id="modal-modal-description" sx={{ mt: 2 }} key={el.id}>{el.user.login}</Typography>

))} 

          
        </Box>
      </Modal>
        
        
        
      
        
        
        </>
        
        
        
        
        
        
    
    )
}

export default PostLikesSmall
