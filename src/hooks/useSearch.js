import { useEffect, useState } from "react";

const initialUser = {
  name: "octocat",
};
export const useSearch = () => {
  const [input, setInput] = useState({ name: "octocat" });

  const onChangeInput = (event) => {
    setInput({ name: event.target.value });
  };

  const onSubmit = (name) => {
    //console.log(name);
    //console.log(input);
    setInput({ ...input, name: "asdasdas" });
  };

  return { input, onChangeInput, onSubmit };
};
