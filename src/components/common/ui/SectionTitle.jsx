import React from "react";

export function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-10">
      {kicker ? (
        <div className="text-xs uppercase tracking-widest text-primary mb-2">{kicker}</div>
      ) : null}
      <h2 className="text-2xl md:text-4xl font-semibold leading-tight">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
