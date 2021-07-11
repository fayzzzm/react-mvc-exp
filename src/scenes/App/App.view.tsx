import logo from "../../logo.svg";

interface IApp {
  data: {
    stack: string;
  };
}

export const AppView = ({ data }: IApp) => {
  const { stack } = data;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {stack}
        </a>
      </header>
    </div>
  );
};
