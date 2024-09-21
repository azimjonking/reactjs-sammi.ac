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

export default Header;
