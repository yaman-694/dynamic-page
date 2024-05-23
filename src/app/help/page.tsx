import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      Help page
      <Link href={"inside"}>Inside</Link>
    </div>
  );
}
