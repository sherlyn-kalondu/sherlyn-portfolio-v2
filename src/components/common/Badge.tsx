import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

function Badge({ children }: BadgeProps) {
  return (
    <span className="badge inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
      {children}
    </span>
  );
}

export default Badge;
