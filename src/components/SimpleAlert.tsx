import React, { useEffect, ReactNode, useState } from "react";

export interface Props {
  children: ReactNode;
  alertType?: "success" | "warning" | "danger" | "info";
  autoHide?: boolean;
  autoHideMilliSecs?: number;
  onClose?: () => void;
}

export const SimpleAlert = ({
  children,
  alertType = "success",
  autoHide = false,
  autoHideMilliSecs = 8000,
  onClose = undefined,
}: Props) => {
  //AlertType[alertType] +
  const alerClzStr =
    "alert alert-" + alertType + " alert-dismissible fade show";
  const [show, setShow] = useState(true);

  if (autoHide) {
    useEffect(() => {
      const timeId = setTimeout(() => {
        if (show) {
          setShow(false);
          if (onClose !== undefined) {
            onClose();
          }
        }
      }, autoHideMilliSecs);

      return () => {
        clearTimeout(timeId);
        //setShow(false);
      };
    }, []);
  }

  const onCloseBtn = () => {
    setShow(false);
    if (onClose !== undefined) {
      onClose();
    }
  };
  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  return (
    <div className={alerClzStr} role="alert">
      {children}
      <button
        type="button"
        data-bs-dismiss="alert"
        className="btn-close"
        aria-label="Close"
        onClick={onCloseBtn}
      ></button>
    </div>
  );
};

//export default SimpleAlert;
