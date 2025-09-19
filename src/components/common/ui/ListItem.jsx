import React from "react";
import { Check } from "lucide-react";

export function ListItem({ children }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <Check className="w-4 h-4 mt-0.5" />
      <span>{children}</span>
    </div>
  );
}

export default ListItem;
