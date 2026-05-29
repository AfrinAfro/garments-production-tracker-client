const PrimaryButton = ({
  text,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="primary-btn"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;