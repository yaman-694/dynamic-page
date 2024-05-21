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
    if (currentElementId || currentContainerId) {
      const newPageConfig = {
        ...pageConfig,
        currentElementId: currentElementId,
        currentContainerId,
        heroSection: {
          ...pageConfig.heroSection,
          [currentElementId]: currentElement,
        },
      };
      setPageConfig(newPageConfig);
    }
  }, [currentElementId, currentContainerId]);

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
    currentContainerId
  };
};
