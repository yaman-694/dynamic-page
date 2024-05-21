"use client";
import React from "react";
import RenderPage from "../RenderPage";
import Slate from "@/components/careersPage/Slate";
import EventListner from "./EventListner";
import Editor from "@/components/Editor";
import { useEditorProvider } from "@/hooks/useEditorProvider";
import { Switch } from "@/components/ui/switch";

export default function EditorProvider({ config }: { config: any }) {
  const {
    currentElement,
    setCurrentElement,
    setCurrentElementId,
    pageConfig,
    isEditing,
    setCurrentContainerId,
    currentContainerId,
    setIsEditing,
  } = useEditorProvider({ config });

  return (
    <div className="grid grid-cols-5 container my-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="isEditing">Switch Mode</label>
          <Switch
            checked={isEditing}
            onCheckedChange={(checked) => {
              setIsEditing(checked);
            }}
          />
        </div>
        {isEditing && (
          <Editor
          currentContainerId={currentContainerId}
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
          />
        )}
      </div>
      <div className="col-span-4">
        <EventListner id="parent" setCurrentElementId={setCurrentElementId} setCurrentContainerId={setCurrentContainerId}>
          <RenderPage
            render={(pageConfig) => <Slate props={pageConfig} />}
            config={pageConfig}
          />
        </EventListner>
      </div>
    </div>
  );
}
