import { useState } from "react";
import { AppView } from "./App.view";
import "./style.css";

export const App = () => {
  const [name, setName] = useState("Mustafo");

  const handleChange = (event: { target: { value: string } }) => {
    const {
      target: { value },
    } = event;

    setName(value);
  };

  const credentials = {
    data: {
      stack: "React",
      name,
    },

    handlers: {
      handleChange,
    },
  };

  return AppView(credentials);
};
