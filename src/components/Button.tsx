import BootstrapVariant from "@/types/BootstrapVariant";
import { ReactNode } from "react";
// import styled from "styled-components";

// const Btn = styled.button`
// Not needed when using Bootstrap
/* display: inline-block;
  text-align: center;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  cursor: pointer; */
// `;

interface Props {
  variant?: BootstrapVariant;
  children: ReactNode;
  onClick: () => void;
}
function Button({ variant = "primary", children, onClick }: Props) {
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
