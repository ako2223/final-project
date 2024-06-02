import React, { useEffect, useState } from "react";
import style from "./Ai.module.scss";
import { Link } from "react-router-dom";
import ago from "../Ago/Ago";
import { CiHeart } from "react-icons/ci";
import { postApi } from "../../store/services/postApi";
import PostLikesSmall from "../PostLikesSmall/PostLikesSmall";

function Ai() {
    const {
        data: posts,
        isLoading,
        isError,
        refetch,
      } = postApi.useGetAiQuery("");
    
      console.log(posts);
  return (
    <div>

    
      aaa
    </div>
  );
}

export default Ai;
