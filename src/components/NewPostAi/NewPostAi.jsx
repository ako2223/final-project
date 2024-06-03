import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { postApi } from "../../store/services/postApi";
import imgplace from '../../assets/img/128px-placeholder.png';
import { FcAddImage } from "react-icons/fc";
import style from "./NewPostAi.module.scss";

function NewPostAi() {
  const [addUser] = postApi.useAddUserMutation();
  const [addPost, { isLoading, isSuccess, isError, error }] = postApi.useAddPostMutation();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState(imgplace);
  const [description, setDescription] = useState('');
  const fileUrl = 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png';

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchImageFromUrl = async (url) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: blob.type });
        setImage(URL.createObjectURL(blob));
        setImageFile(file);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImageFromUrl(fileUrl);
  }, [fileUrl]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      setImageFile(file);
      setDescription(file.name);
    } else {
      setImage(imgplace);
      setImageFile(null);
    }
  };

  const onPost = (values) => {
    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }
    formData.append("description", values.description);
    addPost(formData);
  };

  return (
    <div className={style.newPostAi}>
      <form onSubmit={handleSubmit(onPost)}>
        <div>
          <img src={image} alt="Selected" className={style.image} />
          <label htmlFor="fileInput">
            <FcAddImage size={24} />
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={onImageChange}
            style={{ display: 'none' }}
            {...register("file")}
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          {...register("description")}
          className={style.textarea}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Posting..." : "Post"}
        </button>
      </form>
      {isSuccess && <p>Post added successfully!</p>}
      {isError && <p>Error adding post: {error.message}</p>}
    </div>
  );
}

export default NewPostAi;
