import React, { useEffect, useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "../hooks/useSearch";
import { useFetchApi } from "../hooks/useFetchApi";
import { useFetchTest } from "../hooks/useFetchTest";

export const Search = () => {
  const { input, onChangeInput, onSubmit } = useSearch();

  const { changeUrl } = useFetchTest();

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (input.name.length <= 0) return;
    changeUrl(input.name);
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        marginTop: "20px",
        width: "80%",
      }}
    >
      <TextField
        value={input.name}
        onChange={onChangeInput}
        id="search"
        label="GitHub User"
        variant="outlined"
        placeholder="Buscar usuario GitHub"
        size="small"
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={onHandleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
