import BootstrapVariant from "@/types/BootstrapVariant";
import { ReactNode } from "react";

interface Props {
  type: BootstrapVariant;
  children: ReactNode;
  onClose: () => void;
}

function Alert({ type, children, onClose }: Props) {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
