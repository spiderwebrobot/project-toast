import React from "react";
// import useEscapeKey from "../../hooks/useEscapeKey";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // console.log("debug ToastProvider");
  // states
  const [toasts, setToasts] = React.useState([]);
  // callbacks
  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);
  // effects
  // useEscapeKey(handleEscape);
  useKeydown("Escape", handleEscape);
  // actions
  const createToast = (message, variant) => {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  };
  const dismissToast = (id) => {
    const filtered = toasts.filter((t) => t.id !== id);
    setToasts(filtered);
  };
  // JSX
  return (
    <ToastContext.Provider value={{ createToast, dismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
