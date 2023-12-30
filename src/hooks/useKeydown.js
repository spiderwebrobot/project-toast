import React from "react";

const useKeydown = (key, callback) => {
  // effects
  React.useEffect(() => {
    // handlers
    const handleKeyDown = (event) => {
      if (event.code === key) callback(event);
    };
    // listeners
    window?.addEventListener("keydown", handleKeyDown);
    // cleanup
    return () => {
      window?.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeydown;
