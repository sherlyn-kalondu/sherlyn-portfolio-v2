import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  download?: boolean;
}

function Button({
  children,
  variant = "primary",
  href,
  onClick,
  download = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex group items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",

    secondary:
      "btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",

    outline:
      "btn-outline inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;