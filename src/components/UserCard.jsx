import React, { useEffect } from "react";

import { useFetchApi } from "../hooks/useFetchApi";
import { useFetchTest } from "../hooks/useFetchTest";
import { useSearch } from "../hooks/useSearch";
import { Card } from "./Card";
const initialUser = {
  name: "octocat",
};
export const UserCard = () => {
  const { input } = useSearch();
  const { data } = useFetchTest();

  return data == null ? "cargando" : <Card data={data} />;
};
