import axios from "axios";
import React, { useEffect, useState } from "react";

const initialUser = {
  name: "octocat",
};

export const useFetchApi = () => {
  const [userGit, setUserGit] = useState({});

  const getDataApi = async (user) => {
    try {
      const url = `https://api.github.com/users/${user}`;
      const response = await axios.get(url);
      setUserGit(response.data);
    } catch (error) {
      console.error(error);
    }
    // axios
    //   .get(url)
    //   .then(function (response) {
    //     console.log(response);
    //     setDatos(response.data);
    //   })
    //   .catch(function (error) {
    //     // console.log(error);
    //   });
  };

  useEffect(() => {
    getDataApi(initialUser.name);
  }, []);

  return { userGit, getDataApi };
};
