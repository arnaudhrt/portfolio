import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

export default function SectionTitle({ children, id }: SectionTitleProps) {
  return (
    <h2 id={id} className="mb-3 text-lg font-bold">
      {children}
    </h2>
  );
}
