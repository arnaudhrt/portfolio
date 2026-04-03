import React from "react";

export default function SectionTitle({ children }: React.PropsWithChildren) {
  return <h2 className="mb-3 text-lg font-bold">{children}</h2>;
}
