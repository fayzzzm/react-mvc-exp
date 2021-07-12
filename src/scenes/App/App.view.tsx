import logo from "../../logo.svg";

interface IApp {
  data: {
    stack: string;
    name: string;
  };
  handlers: {
    handleChange: (event: { target: { value: string } }) => void;
  };
}

export const AppView = ({ data, handlers }: IApp) => {
  const { stack, name } = data;
  const { handleChange } = handlers;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="typo-block">
          <h3>Write something that the world could see: {name}</h3>
          <div className="typ-block__input">
            <input type="text" value={name} onChange={handleChange} />
          </div>
        </div>
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
