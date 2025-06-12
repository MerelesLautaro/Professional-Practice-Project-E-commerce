const Container = ({ children }) => {
  return (
    <div className="card-container">
      <div className="card">
        {children}
      </div>
    </div>
  );
};

export default Container;