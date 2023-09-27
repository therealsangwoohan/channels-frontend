import { PacmanLoader } from "react-spinners";

function PageLoader() {
  return (
    <div style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <PacmanLoader color="yellow"></PacmanLoader>
    </div>
  );
};

export default PageLoader;
