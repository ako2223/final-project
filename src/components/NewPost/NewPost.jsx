import React from "react";
import style from "./NewPost.module.css";
import { useForm } from "react-hook-form";
import { postApi, addUser, addPost } from "../../store/services/postApi";

function NewPost() {
  const [addUser, {}] = postApi.useAddUserMutation();
  const [addPost, { isLoading, isSuccess, isError, error }] = postApi.useAddPostMutation();
  const { register, handleSubmit, reset } = useForm();



  const onSubmit = (values) => {
    addUser(values);
  };

  const onPost = (values) => {
    const formData = new FormData();
    formData.append("file", values.file[0], values.file[0].name);
    formData.append("description", values.description);
    addPost(formData);
};
  return (
    //         <form onSubmit={handleSubmit(onSubmit)} className={style.form} noValidate>
    //             <div className={style.input}><input className={errors.name && style.error} type="text" placeholder="Name" {...register("name", {pattern:  {value: /^[a-zA-Z0-9]{2,15}$/
    // , message: "Username must be 2-15 characters long, contain only letters and numbers"}, required: 'Required field'})} />
    //             {errors.name &&<span className={style.error}>{errors.name.message}</span>}</div>
    //             <div className={style.input}><input className={errors.name && style.error} type="email" placeholder="Email" {...register("email", {pattern:  {value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    // , message: "Invalid email format"}, required: 'Required field'})}/>
    //             {errors.email &&<span className={style.error}>{errors.email.message}</span>}</div>
    //             <div className={style.input}><input className={errors.name && style.error} type="password" placeholder="Password" {...register("password", {pattern:  {value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*\s)[a-zA-Z0-9]*.{8,20}$/

    // , message: "Password nmust be 8-20 characters long, and contain at least one uppercase letter, one lowercase letter, and one digit"}, required: 'Required field'})}/>
    //             {errors.password &&<span className={style.error}>{errors.password.message}</span>}</div>
    // <button type="submit" >Submit</button>
    //         </form>

    // <form onSubmit={handleSubmit(onPost)}>
    //   {/* Choose a file to upload: <input name="uploadedfile" type="file" {...register("file")}/><br /> */}
    //   Choose a file to upload:{" "}
    //   <input name="uploadedfile" type="file" {...register("file")} />
    //   <br />
    //   <input type="submit" value="Upload File" />
    // </form>
<form onSubmit={handleSubmit(onPost)}>
            <label>
                Choose a file to upload:{" "}
                <input name="file" type="file" {...register("file")} />
            </label>
            <br />
            <label>
                Description:{" "}
                <input name="description" type="text" {...register("description")} />
            </label>
            <br />
            <input type="submit" value="Upload File and Description" disabled={isLoading} />
            {isLoading && <p>Uploading...</p>}
            {isSuccess && <p>File and description uploaded successfully!</p>}
            {isError && <p>Error uploading file and description: {error.message}</p>}
        </form>

  );
}

export default NewPost;
