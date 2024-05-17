"use client";
import React, { useCallback, useEffect } from "react";

export default function EventListner({
  children,
  id,
  setCurrentElementId,
}: {
  id: string;
  children: React.ReactNode;
  setCurrentElementId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = useCallback(
    (e: any) => {
      const containerId = (e.target as HTMLElement).closest(".container-wrapper")?.id;
      if (containerId) setCurrentElementId(containerId);
      else {
        setCurrentElementId(e.target.id);
      }
    },
    [setCurrentElementId]
  );

  useEffect(() => {
    const parentDiv = document.getElementById(id);
    parentDiv?.addEventListener("click", handleClick);
  }, [id, handleClick]);
  return <div id={id}>{children}</div>;
}
