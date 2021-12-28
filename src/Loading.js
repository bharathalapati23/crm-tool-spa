import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginTop: "100%",
        marginLeft: "100%",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
