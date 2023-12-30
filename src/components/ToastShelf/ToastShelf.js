import React from "react";
import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  // console.log("debug ToastShelf");
  // contexts
  const { toasts } = React.useContext(ToastContext);
  // JSX
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
