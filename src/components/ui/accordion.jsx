import React, { useState } from "react";
import { cn } from "../../lib/utils";

const Accordion = ({ type = "single", children, className = "" }) => {
  const [openItems, setOpenItems] = useState([]);
  const toggleItem = (value) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev[0] === value ? [] : [value];
      }
      return prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
    });
  };
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { openItems, toggleItem })
      )}
    </div>
  );
};

const AccordionItem = ({ value, openItems, toggleItem, className = "", children }) => {
  const open = openItems.includes(value);
  return (
    <div className={cn("border rounded-md", className)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, toggle: () => toggleItem(value) })
      )}
    </div>
  );
};

const AccordionTrigger = ({ children, open, toggle, className = "", icon }) => (
  <button
    onClick={toggle}
    className={cn(
      "flex w-full items-center justify-between p-4 font-medium", className
    )}
  >
    {children}
    {icon || <span>{open ? "-" : "+"}</span>}
  </button>
);

const AccordionContent = ({ children, open, className = "" }) => (
  <div className={cn("p-4 pt-0", className)} hidden={!open}>
    {children}
  </div>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
