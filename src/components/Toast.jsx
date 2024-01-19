import React, { useEffect, useRef, useState } from "react";
import {
  IconAlertCircleFilled,
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconInfoCircleFilled,
  IconX,
} from "@tabler/icons-react";
import { useToast } from "../hooks/useToast";

const toastTypes = {
  success: {
    icon: <IconCircleCheckFilled />,
    iconClass: "success-icon",
    progressBarClass: "success",
  },
  warning: {
    icon: <IconAlertCircleFilled />,
    iconClass: "warning-icon",
    progressBarClass: "warning",
  },
  info: {
    icon: <IconInfoCircleFilled />,
    iconClass: "info-icon",
    progressBarClass: "info",
  },
  error: {
    icon: <IconCircleXFilled />,
    iconClass: "error-icon",
    progressBarClass: "error",
  },
};
const Toast = ({ message, type, id }) => {
  const { icon, iconClass, progressBarClass } = toastTypes[type];
  const toast = useToast();
  const [dismissed, setDismissed] = useState(false);
  const timerID = useRef(null); // create a Reference
  const progressRef = useRef(null);

  const handleDismiss = () => {
    console.log("handleDismiss");
    setDismissed(true);
    setTimeout(() => {
      toast.remove(id);
    }, 400);
  };
  const handleMouseEnter = () => {
    clearTimeout(timerID.current);
    progressRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    const remainingTime =
      (progressRef.current.offsetWidth /
        progressRef.current.parentElement.offsetWidth) *
      4000;

    progressRef.current.style.animationPlayState = "running";

    timerID.current = setTimeout(() => {
      handleDismiss();
    }, remainingTime);
  };

  useEffect(() => {
    timerID.current = setTimeout(() => {
      handleDismiss();
    }, 4000);

    return () => {
      clearTimeout(timerID.current);
    };
  }, []);

  return (
    <div
      className={`toast ${dismissed ? "toast-dismissed" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={iconClass}>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="dismiss-btn" onClick={() => handleDismiss()}>
        <IconX size={18} color="#aeb0d7" />
      </button>
      {/* Toast Progress Bar */}
      <div className="toast-progress">
        <div
          ref={progressRef}
          className={`toast-progress-bar ${progressBarClass}`}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
