import React from "react";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Config } from "./careersPage/Slate";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function Editor({
  currentElement,
  currentContainerId,
  setCurrentElement,
}: {
  currentElement: Config | undefined;
  currentContainerId: string;
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
        {currentContainerId && (
          <div className="flex flex-col gap-3">
            <div>You are in {currentContainerId.split('-').join(' ')} container</div>
          </div>
        )}
      </div>
    </div>
  );
}
