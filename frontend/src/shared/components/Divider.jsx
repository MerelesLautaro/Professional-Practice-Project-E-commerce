//EC-41 Divider
const Divider = () => {
  return (
    <hr
      style={{
        border: "none",
        height: "2px",
        backgroundColor: "#000",
        margin: "0 20px",
        width: "calc(100% - 40px)",
      }}
    />
  );
};

export default Divider;