import React from "react";

const useEscapeKey = (callback) => {
  // effects
  React.useEffect(() => {
    // handlers
    const handleKeyDown = (event) => {
      if (event.code === "Escape") callback(event);
    };
    // listeners
    window?.addEventListener("keydown", handleKeyDown);
    // cleanup
    return () => {
      window?.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

export default useEscapeKey;
