import axios from "axios";
import { useSearch } from "../hooks/useSearch";
import { useState } from "react";

export const getDataApi = async (nameUser) => {
  try {
    const url = `https://api.github.com/users/${nameUser}`;
    const response = await axios.get(url);

    return response.data;
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
