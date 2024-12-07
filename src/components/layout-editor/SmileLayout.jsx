import React from "react";
import OutputComponent from "../code-editor/output/OutputComponent";
import InformationLanguageComponent from "../code-editor/information-language/InformationLanguageComponent";
import CodeEditorComponent from "../code-editor/editor/CodeEditorComponent";

const SmileLayout = () => {
  return (
    <>
      <div className="relative flex items-start justify-center gap-2 flex-col lg:flex-row">
        <CodeEditorComponent className={'lg:h-[70vh]'}/>
        <div className="w-[100%] lg:w-[28%] overflow-hidden">
            <InformationLanguageComponent className={"lg:h-[70vh]"}/>
        </div>
      </div>
          <OutputComponent className={"h-[20vh] mt-2"}/>
    </>
  );
};

export default SmileLayout;
