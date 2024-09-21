import "./App.css";

const Header = () => {
  const text = "Azimjon";
  const getText = (text) => {
    return (
      <div>
        <h1>Hello {text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptates sunt aut odit laborum libero laboriosam tempore in rem
          officia.
        </p>
      </div>
    );
  };
  return <div>{getText(text)}</div>;
};

const Field = () => {
  const placeholder = "Typing...";
  const typeInput = "text";
  return <input type={typeInput} placeholder={placeholder} />;
};

const Button = () => {
  const user = false;
  const login = "Login";
  return <button>{user ? "logout" : login}</button>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Button />
    </div>
  );
}

export default App;
