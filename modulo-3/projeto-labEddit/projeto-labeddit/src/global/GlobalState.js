import axios from "axios";
import React, { useState } from "react";
import { Url } from "../constants/urls";
import GlobalContext from "./GlobalContext";

export const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({});

  const [page, setPage] = useState(1);

  const [postComments, setPostComments] = useState([]);

  const size = 10;

  const getPosts = (currentPage) => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${Url}/posts?page=${currentPage}&size=${size}`, header)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { posts, post, postComments, page };

  const setters = { setPosts, setPost, setPostComments, setPage };

  const getters = { getPosts };
  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
