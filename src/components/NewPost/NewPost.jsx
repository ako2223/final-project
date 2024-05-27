import React from "react";
import { useState, useRef, useEffect } from "react";
import style from "./NewPost.module.css";
import { useForm, Controller } from "react-hook-form";
import { postApi, addUser, addPost } from "../../store/services/postApi";
import imgplace from '../../assets/img/128px-placeholder.png'
import { FcAddImage } from "react-icons/fc";

function NewPost() {
  const [addUser, {}] = postApi.useAddUserMutation();
  const [addPost, { isLoading, isSuccess, isError, error }] = postApi.useAddPostMutation();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')

  const onImageChange = (event) => {
    if(event){
      console.log(event)
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
   if(!event.target.value.includes('fakepath')) {setDescription(event.target.value)}
  } else {setImage(imgplace);

    
   };
   }




  const onSubmit = (values) => {
    addUser(values);
  };

  const onPost = (values) => {
    const formData = new FormData();
    formData.append("file", values.file[0], values.file[0].name);
    formData.append("description", values.description);
    addPost(formData);
};

const readyFile = () => {
  alert('файл выбран')
}

useEffect(onImageChange,[])


  return (
    <div>
   
<form onSubmit={handleSubmit(onPost)} onChange={onImageChange}>
  
            <label>
                Выберите картинку:{" "}
                <input name="file" type="file" onChange={onImageChange}  className="filetype" {...register("file")}/>
            </label>
            <br />
            <label>
               Текст (опционально):{" "}
                <input name="description" type="text" {...register("description")} />
            </label>
            <br />
            <input type="submit" value="Создать пост" disabled={isLoading} />
            {isLoading && <p>Загрузка...</p>}
            {isSuccess && <p>Пост создан!</p>}
            {isError && <p>Ошибка загрузки... {error.message}</p>}
           
        </form>
        
        <img alt="preview image" src={image}/>
        <p>{description}</p>
      </div>

  );
}

export default NewPost;
