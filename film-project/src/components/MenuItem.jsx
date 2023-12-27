import Link from "next/link";
import React from "react";

const MenuItem = ({ m }) => {
  return (
    <div>
      <Link href={m.url}>{m.name}</Link>
    </div>
  );
};

export default MenuItem;
