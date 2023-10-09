import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearch } from "./useSearch";

export const useFetchTest = () => {
  const { input } = useSearch();

  const [url, seturl] = useState(`https://api.github.com/users/${input.name}`);

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getDataApi = async () => {
    setState({ ...state, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  const changeUrl = (name) => {
    seturl(`https://api.github.com/users/${name}`);
  };

  useEffect(() => {
    getDataApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

    getDataApi,
    changeUrl,
  };
};
