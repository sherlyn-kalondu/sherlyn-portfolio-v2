import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "", style, ...props }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        dark:border-slate-800
        bg-white
        text-slate-900
        dark:bg-slate-900
        dark:text-slate-100
        p-6
        transition-all
        duration-300
        ${className}
      `}
      style={{ borderColor: "var(--border)", borderWidth: 1, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
