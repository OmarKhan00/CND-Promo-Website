import React from "react";

export function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="h-full shadow-sm border rounded-xl p-5 bg-white">
      <div className="w-10 h-10 rounded-2xl bg-muted grid place-items-center mb-3">
        {Icon ? <Icon className="w-5 h-5" /> : null}
      </div>
      <div className="text-base font-medium mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{desc}</div>
    </div>
  );
}

export default FeatureCard;
