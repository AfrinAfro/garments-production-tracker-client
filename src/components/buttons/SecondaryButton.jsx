const SecondaryButton = ({
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white duration-300"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;