import { MouseEvent } from "react";

interface Props {
  children: string;
  color?: "secondary" | "primary" | "danger" | "warning" | "success";
  onClick: (e: any) => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={() => onClick(event)}>
      {children}
    </button>
  );
};

export default Button;
