import { AppView } from "./App.view";
import "./style.css";

export const App = () => {
  const credentials = {
    data: {
      stack: "React",
    },
  };

  return AppView(credentials);
};
