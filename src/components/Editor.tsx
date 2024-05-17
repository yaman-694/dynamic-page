import React from "react";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Config } from "./careersPage/Slate";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Editor({
  currentElement,
  setCurrentElement,
}: {
  currentElement: Config | undefined;
  setCurrentElement: React.Dispatch<React.SetStateAction<Config | undefined>>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>
          {currentElement?.id?.split("-").join(" ") || "Select and element"}
        </label>
        <div className="flex items-center gap-3 ">
          <Input
            disabled={!currentElement}
            value={currentElement?.text ?? "Select an element to edit"}
            onChange={(e) =>
              setCurrentElement({
                ...currentElement!,
                text: e.target.value,
              })
            }
          />
          <Switch
            disabled={!currentElement}
            checked={currentElement?.hide ?? false}
            onCheckedChange={(checked) => {
              setCurrentElement({
                ...currentElement!,
                hide: checked,
              });
            }}
          />
        </div>
      </div>
      <div>
        {currentElement?.id === "job-card" && (
          <div className="flex flex-col gap-3">
            <label className="">
              {currentElement?.id?.split("-").join(" ") || "Select and element"}
            </label>
            <div>You selected job card</div>
          </div>
        )}
        {currentElement?.id === "filter-box" && (
          <div className="flex flex-col gap-3">
            <label>
              {currentElement?.id?.split("-").join(" ") || "Select and element"}
            </label>
            <div>You selected filter box</div>
          </div>
        )}
      </div>
    </div>
  );
}