import React, { useState } from "react";
import { cn } from "../../lib/utils";

const Tabs = ({ defaultValue, children, className = "" }) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === "TabsList") {
          return React.cloneElement(child, { value, setValue });
        }
        if (child.type.displayName === "TabsContent" && child.props.value === value) {
          return React.cloneElement(child, { value });
        }
        return null;
      })}
    </div>
  );
};

const TabsList = ({ children, value, setValue, className = "" }) => (
  <div
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
  >
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { value, setValue })
    )}
  </div>
);
TabsList.displayName = "TabsList";

const TabsTrigger = ({ value: itemValue, value, setValue, className = "", ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      value === itemValue ? "bg-background text-foreground shadow" : "text-muted-foreground",
      className
    )}
    onClick={() => setValue(itemValue)}
    {...props}
  />
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = ({ value: itemValue, value, className = "", ...props }) => (
  <div className={cn("mt-2", className)} hidden={value !== itemValue} {...props} />
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
