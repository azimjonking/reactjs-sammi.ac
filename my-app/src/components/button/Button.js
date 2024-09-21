const Button = () => {
  const user = false;
  const login = "Login";
  return <button>{user ? "logout" : login}</button>;
};

export default Button;
