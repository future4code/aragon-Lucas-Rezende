import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const changeForm = (e) => {
    const newForm = { ...form };
    newForm[e.target.name] = e.target.value;

    setForm(newForm);
  };

  return [form, changeForm];
};
