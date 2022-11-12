const Button = ({ onClick }) => {
  return (
    <div className="Wrapper">
      <button onClick={onClick} className="Button" type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;
