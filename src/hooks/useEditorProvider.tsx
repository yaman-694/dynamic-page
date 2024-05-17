import { Config } from "@/components/careersPage/Slate";
import { elementIdToSectionMap } from "@/pageConfig/pageConfig";
import { useEffect, useState } from "react";

export const useEditorProvider = ({ config }: { config: any }) => {
  const [pageConfig, setPageConfig] = useState(config);
  const [currentElementId, setCurrentElementId] = useState("");
  const [currentElement, setCurrentElement] = useState<Config | undefined>(
    undefined
  );
  const [isEditing, setIsEditing] = useState(config.isEditor);

  useEffect(() => {
    if (currentElementId) {
      const section = elementIdToSectionMap.get(currentElementId) as string;
      
      const element = pageConfig[section][currentElementId];
      setCurrentElement(element);
    }
  }, [currentElementId, pageConfig]);

  useEffect(() => {
    if (currentElement) {
      const newPageConfig = {
        ...pageConfig,
        currentElement: currentElementId,
        heroSection: {
          ...pageConfig.heroSection,
          [currentElementId]: currentElement,
        },
      };
      setPageConfig(newPageConfig);
    }
  }, [currentElement]);

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
  };
};
