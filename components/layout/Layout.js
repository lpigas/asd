import React from "react";

export default function Layout({ children, titlePage }) {
  return (
    <div className=" max-h-full max-w-full ">
      <title> {titlePage}</title>
      {children}
    </div>
  );
}
