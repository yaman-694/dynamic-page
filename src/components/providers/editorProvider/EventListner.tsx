"use client";
import React, { useCallback, useEffect } from "react";

export default function EventListner({
  children,
  id,
  setCurrentElementId,
  setCurrentContainerId,
}: {
  id: string;
  children: React.ReactNode;
  setCurrentElementId: React.Dispatch<React.SetStateAction<string>>;
  setCurrentContainerId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = useCallback(
    (e: any) => {
      const containerId = (e.target as HTMLElement).closest(
        ".container-wrapper"
      )?.id;
      if (containerId) {
        const elementId = (e.target as HTMLElement).closest(".element")?.id;
        if (elementId) setCurrentElementId(elementId);
        else {
          setCurrentElementId("");
        }
        setCurrentContainerId(containerId);
      } else {
        setCurrentContainerId("");
      }
    },
    [setCurrentElementId, setCurrentContainerId]
  );

  useEffect(() => {
    const parentDiv = document.getElementById(id);
    parentDiv?.addEventListener("click", handleClick);
  }, [id, handleClick]);
  return <div id={id}>{children}</div>;
}
