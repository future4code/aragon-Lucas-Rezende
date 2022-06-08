import axios from "axios";
import React, { useState } from "react";
import { Url } from "../constants/urls";
import GlobalContext from "./GlobalContext";

export const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({});

  const [postComments, setPostComments] = useState([]);

  const getPosts = () => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${Url}/posts?page=1&size=10`, header)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const getPostComments = (id) => {
  //   const header = {
  //     headers: {
  //       authorization: localStorage.getItem("token"),
  //     },
  //   };

  //   axios
  //     .get(`${Url}/posts/${id}/comments`, header)
  //     .then((res) => {
  //       setPostComments(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // getPostComments

  const states = { posts, post, postComments };

  const setters = { setPosts, setPost, setPostComments };

  const getters = { getPosts };
  return (
    <GlobalContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
