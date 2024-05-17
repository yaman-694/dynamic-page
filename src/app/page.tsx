import EditorProvider from "@/components/providers/editorProvider/EditorProvider";
import { propsPageStructure } from "@/pageConfig/pageConfig";

export default function Home() {
  return (
    <main>
      <EditorProvider config={propsPageStructure} />
    </main>
  );
}
