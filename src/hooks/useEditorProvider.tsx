import { Config } from "@/components/careersPage/Slate";
import { elementIdToSectionMap } from "@/pageConfig/pageConfig";
import { useEffect, useState } from "react";

export const useEditorProvider = ({ config }: { config: any }) => {
  const [pageConfig, setPageConfig] = useState(config);
  const [currentElementId, setCurrentElementId] = useState("");
  const [currentContainerId, setCurrentContainerId] = useState("");
  const [currentElement, setCurrentElement] = useState<Config | undefined>(
    undefined
  );
  const [isEditing, setIsEditing] = useState(config.isEditor);

  useEffect(() => {
    if (currentElementId) {
      const section = elementIdToSectionMap.get(currentElementId) as string;
      if (section) {
        const element =
          pageConfig[section][currentContainerId][currentElementId];
        setCurrentElement(element);
      }
    }
  }, [currentElementId, pageConfig, currentContainerId]);

  useEffect(() => {
    if (currentElementId) {
      const newPageConfig = {
        ...pageConfig,
        currentElementId: currentElementId,
        "hero-section": {
          ...pageConfig["hero-section"],
          hero: {
            ...pageConfig["hero-section"]["hero"],
            [currentElementId]: currentElement,
          },
        },
      };
      setPageConfig(newPageConfig);
    }
  }, [currentElement]);

  useEffect(() => {
    if (currentContainerId) {
      const newPageConfig = {
        ...pageConfig,
        currentContainerId: currentContainerId,
      };
      setPageConfig(newPageConfig);
    }
  }, [currentContainerId]);

  useEffect(() => {
    setPageConfig({
      ...pageConfig,
      isEditor: isEditing,
    });
  }, [isEditing]);

  return {
    currentElement,
    setCurrentElement,
    setCurrentElementId,
    pageConfig,
    isEditing,
    setIsEditing,
    setCurrentContainerId,
    currentContainerId,
  };
};
