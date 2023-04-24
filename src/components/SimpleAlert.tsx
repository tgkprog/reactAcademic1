import React, { ReactNode } from "react";

export enum AlertType {
  success,
  danger,
  warning,
  info,
}
export interface Props {
  children: ReactNode;
  alertType: AlertType;
}
export const SimpleAlert = ({ children, alertType }: Props) => {
  const alerClzStr = "alert alert-" + AlertType[alertType];
  return (
    <div className={alerClzStr} role="alert">
      {children}
    </div>
  );
};

//export default SimpleAlert;
